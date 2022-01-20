import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                {
                    name: 'Corey',
                    number: 1
                },
                {
                    name: 'Rodney',
                    number: 2
                },
                {
                    name: 'Freeman',
                    number: 3
                },
                {
                    number: 4
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleInput(e) {
        this.setState({userInput: e.target.value})
    }

    handleClick() {
        let filtered = [];

        for (let i = 0; i < this.state.unFilteredArray.length; i++) {
            for (let key in this.state.unFilteredArray[i]) {
                if (key === this.state.userInput) {
                    filtered.push(this.state.unFilteredArray[i])
                    break;
                }
            }
        }

        this.setState({filteredArray: filtered})
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzletext'>{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' onChange={this.handleInput.bind(this)}></input>
                <button className='confirmationButton' onClick={this.handleClick.bind(this)}>Filter Objects</button>
                <span className='resultsBox filterObjectRB'>{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }
}

export default FilterObject;