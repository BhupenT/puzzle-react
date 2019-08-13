import React, {Component} from 'react';

class InputCell extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            value: this.props.defaultValue
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) { // passes input change cordinates to parent component for collection
        const Value = event['target']['value'].toUpperCase(); // later decided to convert the letter to uppercase :D

        if(/^[a-zA-Z]*$/g.test(Value) && Value.length < 2) { // regex only allow [Aa to Zz] and 1 letter per cell
            this.setState({value: Value});
            const InputState = {
                colIndex: this.props.colIndex,
                value: Value
            };
            
            this.props.onInputInform(InputState);
        }
    }

    componentDidUpdate(prevProps) {
        const newProps = this.props;
        if(prevProps.defaultValue !== newProps.defaultValue) {
            this.setState({value: newProps.defaultValue});
        }
        
    }

    render() {
        
        return (
            <span className={`cell input${this.props.validProps}`}>
                <input type="text" value={this.state.value} onChange={this.handleOnChange}/>
            </span>
        );
    }
}

export default InputCell;