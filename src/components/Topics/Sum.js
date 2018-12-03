import React, { Component } from 'react'

class Sum extends Component {
    constructor() {
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleInput1(evt) {
        this.setState({
            number1: parseInt(evt, 10)
        })
    }

    handleInput2(evt) {
        this.setState({
            number2: parseInt(evt, 10)
        })
    }

    handleSum() {
        this.setState({
            sum: this.state.number1 + this.state.number2
        })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" type="number" onChange={evt => this.handleInput1(evt.target.value)} />
                <input className="inputLine" type="number" onChange={evt => this.handleInput2(evt.target.value)} />
                <button className="confirmationButton" onClick={() => this.handleSum()}>Calculate</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum