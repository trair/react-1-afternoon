import React, {Component} from 'react'

class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
    }

    handleInput(evt) {
        this.setState({
            userInput: evt
        })
    }

    handleSort() {
        const {unFilteredArray} = this.state
        let unFilteredCopy = unFilteredArray
        let filter = []
        for (let i=0; i<unFilteredCopy.length; i++) {
            if (unFilteredCopy[i].startsWith(this.state.userInput)) {
                filter.push(unFilteredCopy[i])
            }
        }
        this.setState({
            filteredArray: filter
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(evt) => this.handleInput(evt.target.value)} value={this.state.userInput} />
                <button className="confirmationButton" onClick={() => this.handleSort()}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString