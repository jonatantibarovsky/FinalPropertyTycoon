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
            this.props.showBuyModal()
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