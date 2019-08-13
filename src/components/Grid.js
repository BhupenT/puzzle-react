import React, {Component} from 'react';
import InputCell  from './input.js';

class Grid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            row: this.props.rowIndex,
            col: this.props.colIndex,
            value: this.props.rowDatas[this.props.rowIndex][this.props.colIndex]
        };
        this.addInputState = this.addInputState.bind(this);
    }

    addInputState(inputState) { // passess states to the parent for collection
        const InputState = {
            row: this.props.rowIndex,
            col: inputState.colIndex,
            value: inputState.value
        }
        this.setState({InputState});

        this.props.onGridInform(InputState);
    }

    render() {
        let gridCell = [],
            rowDatas = this.props.rowDatas,
            validateObjs = this.props.validationData;
        
        gridCell = rowDatas.map((cell, index) => {

            if('+' !== cell) { // only add input component if it has fillable cell
                //console.log(this.props.rowDatas);
                /* if need to send new props for showing all the answers 
                 * and adds validate element class
                */
               
                let value = ('-' !== cell) ? cell : '',
                    validateClass = '';
                
                
                if(Object.keys(validateObjs).length !== 0 && validateObjs.constructor === Object) {

                    if(validateObjs.hasOwnProperty(`${this.props.rowIndex}_${index}`)) {
                        validateClass = (validateObjs[`${this.props.rowIndex}_${index}`] === true) ? ' valid' : ' invalid';
                    }
                
                }
                return (
                    <InputCell defaultValue={value} validProps={validateClass} key={`col${index}`} colIndex={index} onInputInform={this.addInputState}/>
                )
            }else{
                return(
                    <span className="cell" key={`col${index}`}></span>
                )
            }
        })
        return (
            gridCell
        );
    }
}

export default Grid;
