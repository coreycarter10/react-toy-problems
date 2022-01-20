import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: ['Corey', 'Rodney', 'Freeman'],
            userInput: '',
            filteredArray: []
        }
    }

    handleInput(e) {
        this.setState({userInput: e.target.value})
    }

    handleClick() {
        let filtered = [];

        for (let i = 0; i < this.state.unfilteredArray.length; i++) {
            if (this.state.unfilteredArray[i].includes(this.state.userInput)) {
                filtered.push(this.state.unfilteredArray[i]);
            }
        }

        this.setState({filteredArray: filtered});
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>{JSON.stringify(this.state.unfilteredArray.join(', '))}</span>
                <input className='inputLine' onChange={this.handleInput.bind(this)}></input>
                <button className='confirmationButton' onClick={this.handleClick.bind(this)}>Filter Strings</button>
                <span className='resultsBox filterStringRB'>{JSON.stringify(this.state.filteredArray.join(', '))}</span>
            </div>
        )
    }
}

export default FilterString;