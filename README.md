This project was bootstrapped with [Create React App]

## The Puzzle Test App
# Updates

 * Fixed reset button not working when users already input some values in cells. (reset wasnt in the to do list but made it anyway so fixed now.)


# App Overview
This is a react based puzzle board game app that displays puzzles and shows all answers and also validates the input words (if the input letters completes a matching word). If the user never filled any grid cells or one of the matching word is not completely filled then the validations will skips just that word.

This is not a puzzle generator or puzzle solver app at all. This merely displays the grid thats given to the App and displays correct answer by finding words from the answers data grid. The only Algorithm is finding the word from given Grid data

# Questions Grid Puzzles are data

Here i have set up the data that should come in this order for this app to work
'+' signs being the disabled cells and '-' being the input cells that gives user to put in Value

```
const GridLayout = [ // Puzzle Question Grid
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

```

# Answers Grid Puzzles data:

As i wasnt told to use certain answers format. I made up in this way. I find this setup is
easier as since the app is able to find the words that matches and records the cordinates
from the questions Grid. Better and easy data understanding i made it this way.
Ofcourse the app only works if the answers grid is in following format. This must match perfectly as the questions Grid!

```
const GridLayoutAnswers = [ // Puzzle Answers Grid
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

```

## Starting the App
Download the repo and install necessary node.js and npm package manager or yarn
if you node version is higher or lower at the time of download. Then install nvm node ver manager to switch back and forth on whaterver version you want to:


```
## command line ##
cd crosswords-puzzle

npm install

npm start

```

## Dependencies JS libraries
 ### Lodash
 ### node-sass

## Built on
### NODE - VER 11.10.0
### REACT - VER 16.8.6
### NPM package Manager - VER 6.7.0
## Built With

* [React.js and its dependecies](https://reactjs.org) - Framework
* [Node.js] (https://nodejs.org/) - Based on Nodejs and its default and thirdparty modules

## Authors

* **Bhupendra Tamang** - *Initial work* - [Github](https://github.com/BhupenT)
