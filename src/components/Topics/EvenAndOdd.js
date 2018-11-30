import React, {Component} from 'react'

class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleInput(evt) {
        this.setState({
            userInput: evt
        })
    }

    handleSplit() {
        let {userInput} = this.state
        let inputArr = userInput.split(',')
        let newEvenArray = inputArr.filter((el) => el % 2 === 0)
        let newOddArray = inputArr.filter((el) => el % 2 === 1)
        this.setState({
            evenArray: newEvenArray,
            oddArray: newOddArray
        })
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input 
                    className="inputLine" 
                    onChange={(evt) => this.handleInput(evt.target.value)} 
                    value={this.state.userInput} 
                />
                <button 
                    className="confirmationButton" 
                    onClick={() => this.handleSplit()}>
                    Split
                </button>
                <span className="resultsBox">Evens: {this.state.evenArray}</span>
                <span className="resultsBox">Odds: {this.state.oddArray}</span>
            </div>
        )
    }
}

export default EvenAndOdd