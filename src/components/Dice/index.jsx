import React, { Component } from 'react'

import { setDice, updatePlayerPosition,
        showBuyModal, setRolledTrue } from '../../redux/actions/game'
import { connect } from 'react-redux'

import './style.scss'

class Dice extends Component {
    constructor(props) {
        super(props)

        this.state = {
            diceOne: 0,
            diceTwo: 0,
            double: false,
        }
    }

    checkSquare = (square) => {
        const currentPlayerID = this.props.gameState.currentPlayer
        let card
        if (square.group === 'bonus' && square.name === 'Pot Luck') {
            card = this.props.potlucks.shift()
            alert(card.text)
            card.checkMethod(card, currentPlayerID)
            this.props.potlucks.push(card)
        } else if (square.group === 'bonus' && square.name === 'Opportunity Knocks') {
            card = this.props.opportunityKnocks.shift()
            alert(card.text)
            card.checkMethod(card, currentPlayerID)
            this.props.opportunityKnocks.push(card)
        } else if (square.group === 'tax' && square.name === 'Income Tax') {
            console.log(square)
        } else if (square.group === 'tax' && square.name === 'Super Tax') {
            console.log(square)
        } else if (square.group === 'utility' && square.name === 'Tesla Power Co') {
            console.log(square)
        } else if (square.group === 'utility' && square.name === 'Edison Water') {
            console.log(square)
        } else {
            console.log(square)
        }
    }

    handleClick() {
        if (!this.props.gameState.rolled) {
            let diceOne = Math.floor(Math.random() * 6) + 1
            let diceTwo = Math.floor(Math.random() * 6) + 1
            this.props.setDice([diceOne, diceTwo])
            this.setState({
                diceOne: diceOne,
                diceTwo: diceTwo
            })
            let value = diceOne + diceTwo
            this.props.updatePlayerPosition(this.props.gameState.currentPlayer, value)
            const currentPlayerID = this.props.gameState.currentPlayer
            const currentPlayer = this.props.gameState.players[currentPlayerID - 1]
            const currentProperty = this.props.properties.properties[currentPlayer.position]
            this.checkSquare(currentProperty)
            // check square here
            // do things according to square
            // pay rent, get cad
            if (/* special square*/ false) {

            } else {
                // property square
                this.props.showBuyModal()
            }
            
            this.props.setRolledTrue()
        } else {
            alert('You already rolled!')
        }
    }


    render() {
        return(
            <div className='dice-container'>
                <button className='dice-button' onClick={ () => this.handleClick() }>ROLL DICE</button>
                <div className='dice-values'>
                    <div>{ this.state.diceOne }</div>
                    <div>{ this.state.diceTwo }</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gameState: state.game
    }
}

const mapDispatchToProps = {
    setDice,
    updatePlayerPosition,
    showBuyModal,
    setRolledTrue
}

export default connect(mapStateToProps, mapDispatchToProps)(Dice)