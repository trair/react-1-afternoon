import React, { Component } from 'react'

class Palindrome extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleInput(evt) {
        this.setState({
            userInput: evt
        })
    }

    handlePalindrome() {
        let str = this.state.userInput
        let backwardStr = this.state.userInput.split('').reverse().join('')
        if (str === backwardStr) {
            this.setState({
                palindrome: 'true'
            })
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(evt) => this.handleInput(evt.target.value)} value={this.state.userInput} />
                <button className="confirmationButton" onClick={() => this.handlePalindrome()}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome