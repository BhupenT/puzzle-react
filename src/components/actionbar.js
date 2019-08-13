import React, {Component} from 'react';

class ActionBar extends Component {

    handleOnClick(event) {
        this.props.onButtonClick(event);
    }

    render() {
        
        return (
            <div className="action-bar">
                <button className="bttn" data-process="validate" onClick={this.handleOnClick.bind(this)}>
                    Validate
                </button>
                <button className="bttn" data-process="showanswers" onClick={this.handleOnClick.bind(this)}>
                    Show correct answer
                </button>
                <button className="bttn" data-process="resetpuzzel" onClick={this.handleOnClick.bind(this)}>
                    Reset puzzel
                </button>
            </div>
        );
    }
}

export default ActionBar;