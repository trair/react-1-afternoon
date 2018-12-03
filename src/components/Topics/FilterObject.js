import React, { Component } from 'react'

class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                },
                {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                },
                {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                }
            ],
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
        const { unFilteredArray, userInput } = this.state
        let filter = unFilteredArray.filter((el) => el[userInput])
        this.setState({
            filteredArray: filter
        })
    }

    render() {
        console.log(this.state.filteredArray)
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{this.state.unFilteredArray.map((el, i) => {
                    return (
                        <li key={i}>{JSON.stringify(el)}</li>
                    )
                })}</span>
                <input className="inputLine" onChange={(evt) => this.handleInput(evt.target.value)} value={this.state.userInput} />
                <button className="confirmationButton" onClick={() => this.handleSort()}>Filter</button>
                <span className="resultsbox filterObjectRB">{this.state.filteredArray.map((el, i) => <li key={i}>{JSON.stringify(el)}</li>)}</span>
            </div>
        )
    }
}

export default FilterObject