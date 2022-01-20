import React, {Component} from 'react';

class Sum extends Component {
    constructor() {
        super();
        this.state = {
            num1: 0,
            num2: 0,
            sum: null
        }
    }

    handleInput(e) {
        this.setState({num1: e.target.value});
    }

    handleInput2(e) {
        this.setState({num2: e.target.value});
    }

    handleClick() {
        let result = Number(this.state.num1) + Number(this.state.num2);

        this.setState({sum: result})
    }

    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={this.handleInput.bind(this)}></input>
                <input className='inputLine' onChange={this.handleInput2.bind(this)}></input>
                <button className='confirmationButton' onClick={this.handleClick.bind(this)}>Sum the numbers!</button>
                <span className='resultsBox'>{JSON.stringify(this.state.sum)}</span>
            </div>
        )
    }
}

export default Sum;