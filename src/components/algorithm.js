/*
    Class that handles for finding related words that may be both overlapping
    horizontal or vertical word or just single vertical || horizontal word
    tested only for the sample puzzel grid 
    but not for other grids or dimensions but should work fingers cross :)
*/

class ProcessPuzzel {
    'use strict';

    constructor(gridLayout = [], inputData = {}) {

        this.gridLayout = gridLayout;
        this.inputData = inputData;
        this.coloumn = parseInt(inputData.col);
        this.row = parseInt(inputData.row);
        this.inputLetter = this.gridLayout[this.row][this.coloumn];
    }

    findRelatedWords() {

        let verticalWord = this.getverticalWord(),
            horizontalWord = this.getHorizontalWord();

        /*
            matching with the correct letter
            to find if its a word and what are those
        */

        if(verticalWord.word === this.inputLetter && horizontalWord.word === this.inputLetter) {
            /* if vertical and horizontal data is only one that is input letter
                must be actually only a letter word (ie, 'A', 'I')
            */
            return [this.inputLetter];
        }

        if(verticalWord.word === this.inputLetter && horizontalWord.word !== this.inputLetter) {
            /* if verticalword is only the correct answer and 1 char letter but overlaps with horizontal word
                and has horizontal words that means the verticalword is not a word
            */
            return [horizontalWord.word];
        }
        if(verticalWord.word !== this.inputLetter && horizontalWord.word === this.inputLetter) {
            /* if horizontal word is only correct answer and 1 char letter but overlaps with horizontal word
                and has vertical word that means the horizontal is not a word
            */
            return [verticalWord.word];
        }
        if(verticalWord.word !== this.inputLetter && horizontalWord.word !== this.inputLetter) {
            /* if both vertical and horizonal has letters and not matches to the correct letter that means
            the letter that user input overlaps with two words
            */
            return [verticalWord.word, horizontalWord.word];
        }
    
    }

    /* Gets vertical top (negative yAsis and positive yAsis)
    */
    getverticalWord() {
        let _verticalWordBottom = '',
            _verticalWordTop = '',
            trackingT = null,
            trackingB = null;
        
        if(this.row === 0) {

            _verticalWordTop = '';
            trackingT = 'completed';
    
        }else{
    
            let rowT = this.row - 1;
            for (let index = rowT; index > -1; index--) {
                
                let letter = this.gridLayout[index][this.coloumn];
                
                if('+' !== letter) {
                    _verticalWordTop += letter;

                    if(index === 0) {
                        trackingT = 'completed';
                    }
                }else{
                    trackingT = 'completed';
                    break; // end of the input letter
                }
            }
    
        }

        if(this.coloumn === 14) {
            
            _verticalWordBottom = '';
            trackingB = 'completed';
    
        }else{
    
            var rowB = this.row + 1;
    
            for (let index = rowB; index < 15; index++) {

                let letter = this.gridLayout[index][this.coloumn];

                if('+' !== letter) {
                    _verticalWordBottom += letter;

                    if(index === 15) {
                        trackingB = 'completed';
                    }
                }else{
                    trackingB = 'completed';
                    break; // end of the input letter
                }
            }
        }

        if('completed' === trackingT && 'completed' === trackingB) {
            _verticalWordTop = _verticalWordTop.split("").reverse().join("");

            const VerticalWord = _verticalWordTop + this.inputLetter + _verticalWordBottom;
            
            return {
                word: VerticalWord,
            }
        }

    }

    /* Gets horizontal left and horizontal right (negative xAsis and positive xAsis)
    */
    getHorizontalWord() {
        let _horizontalWordLeft = '',
        _horizontalWordRight = '',
        trackingL = null,
        trackingR = null;

        if(this.coloumn === 0) {

            _horizontalWordLeft = '';
            trackingL = 'completed';

        }else{
            let colL = this.coloumn - 1;
            
            for (let index = colL; index > -1; index--) {
                
                let letter = this.gridLayout[this.row][index];
                
                if('+' !== letter) {
                    _horizontalWordLeft += letter;

                    if(index === 0) {
                        trackingL = 'completed';
                    }
                }else{
                    trackingL = 'completed';
                    break; // end of the input letter
                }
                
            }
        }

        if(this.coloumn === 14) {

            _horizontalWordRight = '';
            trackingR = 'completed';

        }else{
            var colR = this.coloumn + 1;
            for (let index = colR; index !== 15; index++) {
                
                let letter = this.gridLayout[this.row][index];
                if('+' !== letter) {
                    _horizontalWordRight += letter;

                    if(index === 15) {
                        trackingR = 'completed';
                    }
                }else{
                    trackingR = 'completed';
                    break; // end of the input letter
                }
            }
        }

        if('completed' === trackingL && 'completed' === trackingR) {
    
            _horizontalWordLeft = _horizontalWordLeft.split("").reverse().join("");
            
            const HorizontalWord = _horizontalWordLeft + this.inputLetter + _horizontalWordRight;

            return {
                word: HorizontalWord,
            }
        }

    }

}

export default ProcessPuzzel;