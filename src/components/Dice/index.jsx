import React, { Component } from 'react'

import { setDice, updatePlayerPosition,
        showBuyModal, setRolledTrue,
        addLog, goToJail,
        pay, getMoney } from '../../redux/actions/game'
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

    checkSquare = (square, player) => {
        const currentPlayerID = this.props.gameState.currentPlayer
        const currentPlayer = this.props.gameState.players[currentPlayerID - 1]
        let card
        if (square.group === 'bonus' && square.name === 'Pot Luck') {
            card = this.props.potlucks.shift()
            this.props.addLog(card.text)
            card.checkMethod(card, currentPlayerID, currentPlayer)
            this.props.potlucks.push(card)
        } else if (square.group === 'bonus' && square.name === 'Opportunity Knocks') {
            card = this.props.opportunityKnocks.shift()
            this.props.addLog(card.text)
            card.checkMethod(card, currentPlayerID, currentPlayer)
            this.props.opportunityKnocks.push(card)
        } else if (square.group === 'tax' && square.name === 'Income Tax') {
            this.props.addLog(`You paid £200 as income tax.`)
            this.props.pay(currentPlayerID, 200)
        } else if (square.group === 'tax' && square.name === 'Super Tax') {
            this.props.addLog(`You paid £100 as super tax.`)
            this.props.pay(currentPlayerID, 100)
        } else if (square.group === 'utility' && square.name === 'Tesla Power Co') {
            console.log(square)
        } else if (square.group === 'utility' && square.name === 'Edison Water') {
            console.log(square)
        } else if (square.name === 'Go To Jail') {
            this.props.goToJail(player)
        } else if (square.name === 'Brighton Station' || square.name === 'Hove Station' || square.name === 'Lewes Station' || square.name === 'Falmer Station') {
            console.log(square)
        } else if (square.owner !== null) {
            // pay rent without houses
            const rent = square.rents[square.rentIndex]
            console.log(rent)
            this.props.pay(currentPlayerID, rent)
            this.props.getMoney(square.owner.id, rent)
        }
    }

    handleClick() {
        if (!this.props.gameState.rolled) {
            let diceOne = Math.floor(Math.random() * 6) + 1
            let diceTwo = Math.floor(Math.random() * 6) + 1
            this.props.setDice([diceOne, diceTwo])
            this.props.addLog(`You rolled ${ diceOne } and ${ diceTwo }`)
            this.setState({
                diceOne: diceOne,
                diceTwo: diceTwo
            })
            let value = diceOne + diceTwo
            this.props.updatePlayerPosition(this.props.gameState.currentPlayer, value)
            const currentPlayerID = this.props.gameState.currentPlayer
            const currentPlayer = this.props.gameState.players[currentPlayerID - 1]
            const currentProperty = this.props.properties.properties[currentPlayer.position]
            this.props.addLog(`Player ${ currentPlayerID } landed on ${ currentProperty.name }`)

            // checks the square type and does things according to it
            // opportunity and pot luck cards are handled here
            // tax properties handles here
            // utilities are handled here
            this.checkSquare(currentProperty, currentPlayerID)
            // if player throws doubles twice in a row --> go to jail
            if (false ) {

            } else {
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
    setRolledTrue,
    addLog,
    goToJail,
    pay,
    getMoney
}

export default connect(mapStateToProps, mapDispatchToProps)(Dice)