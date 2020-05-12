import React, { Component } from 'react'
import { setDice, updatePlayerPosition,
        showBuyModal, setRolledTrue,
        addLog, goToJail,
        pay, getMoney,
        getFreeParkingMoney } from '../../redux/actions/game'
import { connect } from 'react-redux'
import './style.scss'


/**
 * Dice component
 */
class Dice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            diceOne: null,
            diceTwo: null,
            double: false,
            doubleCount: 0,
            rolledDouble: false
        }

        this.double = false
    }

    enoughMoney = (player, money) => {
        if (player.money < money) {
            return false
        } else {
            return true
        }
    }

    /**
     *  checks the current square and executes things according to the square's group
     * 
     */
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

        } else if (square.group === 'utility') {
            if (square.owner !== null) {
                const { diceOne, diceTwo } = this.state
                let rent
                if (square.rentIndex === 1) {
                    rent = 4 * (diceOne + diceTwo)
                } else if (square.rentIndex === 2) {
                    rent = 10 * (diceOne + diceTwo)
                }
                this.props.getMoney(square.owner.id, rent)
                this.props.pay(currentPlayerID, rent)
                this.props.addLog(`${currentPlayer.name} paid £${rent} to ${square.owner} as rent`)
            }

        } else if (square.name === 'Go To Jail') {
            this.props.goToJail(player)

        } else if (square.group === 'station') {
            if (square.owner) {
                const rent = square.rents[square.rentIndex]
                this.props.getMoney(square.owner.id, rent)
                this.props.pay(currentPlayerID, rent)
                this.props.addLog(`${currentPlayer.name} paid £${rent} to ${this.props.gameState.players[square.owner.id - 1].name} as rent`)
            }  

        } else if (square.owner !== null && square.mortgaged === false) {
            const rent = square.rents[square.rentIndex]
            this.props.pay(currentPlayerID, rent)
            this.props.getMoney(square.owner.id, rent)
            this.props.addLog(`${currentPlayer.name} paid £${rent} to ${this.props.gameState.players[square.owner.id - 1].name} as rent`)
        } else if (square.name === 'Free Parking') {
            this.props.getFreeParkingMoney(currentPlayerID)
            this.props.addLog(`${currentPlayer.name} got £${this.props.gameState.freeParking} from free parking`)
        }
    }

    /**
     * Handles the Roll dice button click
     * Checks double rolls, player has another turn if they roll a double.
     * If they roll another double they go to jail
     */
    async handleClick() {
        if (!this.props.gameState.rolled) {
            let diceOne = Math.floor(Math.random() * 6) + 1
            let diceTwo = Math.floor(Math.random() * 6) + 1
            this.props.setDice([diceOne, diceTwo])
            this.props.addLog(`You rolled ${ diceOne } and ${ diceTwo }`)
            await this.setState({
                diceOne: diceOne,
                diceTwo: diceTwo
            })
            if (this.state.diceOne === this.state.diceTwo) {
                alert('You rolled a double, you have another turn. Just roll the dice after you are done with your current turn. Do NOT press end turn.')
                await this.setState({
                    double: true,
                    doubleCount: this.state.doubleCount + 1
                })
            }

            if (this.state.double === true && this.state.rolledDouble === true) {
                this.props.setRolledTrue()
                this.setState({
                    double: false,
                    doubleCount: 0,
                    rolledDouble: false
                })
            } else if (this.state.doubleCount === 2) {
                console.log('jail')
            }

            if (this.state.double === true) {
                this.setState({
                    rolledDouble: true
                })
            } else {
                this.props.setRolledTrue()
            }
          
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

            if (false ) {

            } else {
                this.props.showBuyModal()
            }
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
    getMoney,
    getFreeParkingMoney
}

export default connect(mapStateToProps, mapDispatchToProps)(Dice)