import React, {Component} from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleInput(e) {
        this.setState({userInput: e.target.value})
    }

    handleClick() {
        let result = '';
        let reverseStr = this.state.userInput.split('').reverse().join('');
        
        if (this.state.userInput === reverseStr) {
            result = `${this.state.userInput} is a palindrome!`
        } else {
            result = `${this.state.userInput} is not a palindrome!`
        }

        this.setState({palindrome: result});
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={this.handleInput.bind(this)}></input>
                <button className='confirmationButton' onClick={this.handleClick.bind(this)}>Is palindrome?</button>
                <span className='resultsBox'>{JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
}

export default Palindrome;