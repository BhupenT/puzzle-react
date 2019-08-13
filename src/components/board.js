import React, {Component} from 'react';
import Grid from './Grid';
import ProcessPuzzel from './algorithm';
import ActionBar from './actionbar';
import union from 'lodash/union';
import find from 'lodash/find';
import merge from 'lodash/merge';
import _values from 'lodash/values';
import keyBy from 'lodash/keyBy';

const GridLayout = [ // Puzzel Question Grid
    [ '+','+','+','+','+','+','-','+','+','+','+','+','+','+','+' ],
    [ '+','+','+','+','+','+','-','+','+','+','+','+','+','+','+' ],
    [ '-','-','-','-','-','-','-','-','-','+','+','+','+','+','+' ],
    [ '-','+','+','+','+','+','+','+','+','+','+','-','+','+','+' ],
    [ '-','+','-','+','+','+','+','+','+','+','+','-','+','+','+' ],
    [ '-','-','-','-','-','-','-','-','-','-','+','-','+','+','+' ],
    [ '-','+','-','+','+','+','+','+','+','+','+','-','+','+','+' ],
    [ '-','+','-','-','-','-','-','-','-','-','-','-','+','+','+' ],
    [ '-','+','-','+','+','+','+','+','+','+','+','-','+','+','+' ],
    [ '-','+','-','+','+','+','+','+','-','-','-','-','-','-','+' ],
    [ '-','+','-','+','+','+','+','+','+','+','+','-','+','+','+' ],
    [ '+','+','-','+','+','+','+','+','+','+','+','+','+','+','+' ],
    [ '+','+','-','+','+','+','+','+','+','+','+','+','+','+','+' ],
    [ '+','+','-','+','+','+','+','+','+','+','+','+','+','+','+' ],
    [ '+','+','+','+','+','+','+','+','+','+','+','+','+','+','+' ]
];

const GridLayoutAnswers = [ // Puzzel Answers Grid
    ["+", "+", "+", "+", "+", "+", "A", "+", "+", "+", "+", "+", "+", "+", "+"],
    ["+", "+", "+", "+", "+", "+", "P", "+", "+", "+", "+", "+", "+", "+", "+"],
    ["A", "U", "T", "H", "O", "R", "I", "N", "G", "+", "+", "+", "+", "+", "+"],
    ["N", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "F", "+", "+", "+"],
    ["A", "+", "J", "+", "+", "+", "+", "+", "+", "+", "+", "R", "+", "+", "+"],
    ["L", "E", "A", "R", "N", "O", "S", "I", "T", "Y", "+", "O", "+", "+", "+"],
    ["Y", "+", "V", "+", "+", "+", "+", "+", "+", "+", "+", "N", "+", "+", "+"],
    ["T", "+", "A", "S", "S", "E", "S", "S", "M", "E", "N", "T", "+", "+", "+"],
    ["I", "+", "S", "+", "+", "+", "+", "+", "+", "+", "+", "E", "+", "+", "+"],
    ["C", "+", "C", "+", "+", "+", "+", "+", "S", "Y", "D", "N", "E", "Y", "+"],
    ["S", "+", "R", "+", "+", "+", "+", "+", "+", "+", "+", "D", "+", "+", "+"],
    ["+", "+", "I", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+"],
    ["+", "+", "P", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+"],
    ["+", "+", "T", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+"],
    ["+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+"]
];

class Board extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            dataGrid: [],
            answersCollection:[],
            words: [],
            validationStore: {}
        }

        this.addGridsState = this.addGridsState.bind(this);
        this.onClickButtons = this.onClickButtons.bind(this);
        
    }

    onClickButtons(event) { // All the button click events processing function
        const Button = event.target.getAttribute('data-process');
        switch (Button) {
            case 'validate':
                this.processValidation();
                break;
        
            case 'showanswers':
                this.solvePuzzel();
                break;

            case 'resetpuzzel':
                this.resetPuzzel();
                break;

            default:
                break;
        }
    }

    /*
    process validations in the current component puzzel board
    by adding and updating neccessary validations state datas 
    */
    processValidation() { 
        //console.log(this.state.answersCollection);
        let words = this.state.words,
        answersCol = this.state.answersCollection,
        _validationStore = {},
        counter = 0;

        if(words.length < 1) {
            console.log('no words are found: this means users have not filled all the letters of a word or have not filled in all of the words completely');
            return;
        }

        for (let index = 0; index < words.length; index++) {
            const Word = words[index];
            const MatchingDatas = answersCol.filter(function(object) {
                return object['belongs_to'].indexOf(Word) > -1 && '' !== object['userinput'];
                
            });
            
            if (Array.isArray(MatchingDatas) && MatchingDatas.length) {
                
                if(MatchingDatas.length === Word.length) {
                    // Proceed if  all letters in this word are filled in
                    let testStatus = MatchingDatas.filter(function(object){
                        return object['status'] === false;
                    });
                    //console.log(testStatus);
                    if(testStatus.length) {
                        // there is a incorrect input in this word
                        console.log(`incorrect! - should be : ${Word}`);
                        for (let index = 0; index < MatchingDatas.length; index++) {

                            const object = MatchingDatas[index];
                            // Check if it intersect with other words that may be correct letter
                            if(!_validationStore[object.cordinates]) {
                                _validationStore[object.cordinates] = false;
                            }
                            
                        }

                    }else{
                        // all correct
                        console.log(`Yay Correct! : ${Word}`);
                        for (let index = 0; index < MatchingDatas.length; index++) {

                            const object = MatchingDatas[index];
                            _validationStore[object.cordinates] = true;

                        }
                    }

                }

            }
            counter++;
        }

        if(words.length === counter) {
            this.setState({validationStore: _validationStore})
        }
    }

    solvePuzzel() {
        
        this.setState({
            dataGrid: GridLayoutAnswers
        });

    }

    resetPuzzel() {
        
        this.componentDidMount();
    }

    componentDidMount() {
        /**  Api calls or load datas in our case Static data sample
         * for api calls call and store in a variable for both questions and answers which declared empty
         * on top but our case static so...
         * check // Max 15 x 15 dimensions 
        **/
        if (Array.isArray(GridLayout) && GridLayout.length < 16) {
            
            this.setDimension(GridLayout);
        }

    }
    
    setDimension(data) {
        
        let rowCount = data.length,
            colCount = 0,
            counter = 0,
            _gridLayout = data;

        for (let index = 0; index < data.length; index++) {
            const colArray = data[index];
            if (Array.isArray(colArray) === true) {
                //console.log(colArray.length);
                // Only update colCount if its greater than currently set value
                if(colCount < colArray.length) {
                    colCount = colArray.length;
                }
                //reset if any in the Gridlayout
                for (let j = 0; j < colArray.length; j++) {
                    const _colsItem = colArray[j];
                    if('+' !== _colsItem) {
                        _gridLayout[index][j] = '-';
                    }
                }
                counter++;
            }
        }
        if(counter === data.length) {
            if(rowCount <= 15 && colCount <= 15) { // Max 15 x 15 dimensions
                console.log({rowCount, colCount});

                this.setState({
                    dataGrid: data,
                    answersCollection:[],
                    words: [],
                    validationStore: {}
                });
            }
        }
        
        
    }

    /*
     * this methods sole pupose is to adds the grid data in the state
     * this methods passes the data to addPuzzelWords Data which handles 
     * updates and merges
    */
    addGridsState(gridState) {
        const GridState = gridState;
        this.setState(function(state){
            let row = parseInt(GridState.row),
                col = parseInt(GridState.col);
            if('+' !== state.dataGrid[row][col]) {
                state.dataGrid[row][col] = GridState.value;
                return {
                    dataGrid: state.dataGrid
                }
            }
        });
        this.addPuzzelWordsAndDatas(gridState);

    }

    /*
     * extracts words on users input 
     * updates and adds states datagrid
     * 
    */
   
    addPuzzelWordsAndDatas(gridState) {
        // find related matching words
        const processPuzzel = new ProcessPuzzel(GridLayoutAnswers, gridState);
        let relatedWords = processPuzzel.findRelatedWords(gridState);

        this.setState(function(state){

            let newWords = union(relatedWords, state.words);
            return {
                words: newWords
            }

        });
        
        //console.log(this.state.answersCollection);
        this.setState(function(state){

            let answersCol = state.answersCollection;
            const AnswerObj = find(answersCol, function(object){
                return object.cordinates === `${gridState.row}_${gridState.col}`;
            });
            
            let coloumn = parseInt(gridState.col),
                row = parseInt(gridState.row),
                correctInput = GridLayoutAnswers[row][coloumn],
                status = (correctInput === gridState.value) ? true : false;

            if(typeof AnswerObj === 'undefined') {
                answersCol.push(
                    // push the new ones those letters cordinates not present
                    {
                        cordinates: `${gridState.row}_${gridState.col}`,
                        userinput: gridState.value,
                        belongs_to: relatedWords,
                        correct_input: GridLayoutAnswers[row][coloumn],
                        status: status
                    }
                );

            } else {
                // Update merge the matched once whose cordinates must have already recorded
                let newData = [{
                    cordinates: `${gridState.row}_${gridState.col}`,
                    userinput: gridState.value,
                    status: status
                }];
                
                answersCol = _values(merge(
                    keyBy(answersCol, 'cordinates'),
                    keyBy(newData, 'cordinates')));
            }

            return {
                answersCollection: answersCol
            }

        });


    }
    
    render() {
        let actionBar;
        if(this.state['dataGrid'].length) {
            actionBar = <ActionBar onButtonClick={this.onClickButtons} />
        } else {
            actionBar = <div className="empty">
                <p>Grid is empty or not Valid. Nothing to Display.</p>
            </div>
        }

        return (
            <>
                {actionBar}
                {this.state.dataGrid.map((row, index) => (
                    <div className="row" key={`row${index}`}>
                        <Grid rowDatas={row} validationData={this.state.validationStore} rowIndex={index} onGridInform={this.addGridsState}/>
                    </div>
                ))}
            </>
        );

    }
}

export default Board;
