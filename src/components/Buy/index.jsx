import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Modal } from 'react-bootstrap'

import { hideBuyModal, pay, 
        showAuctionModal, setAuctionPlayers,
        addLog} from '../../redux/actions/game'

class Buy extends Component {
    constructor(props) {
        super(props)
    }

    canBeBought = () => {
        const currentPlayerID = this.props.gameState.currentPlayer
        const currentPlayer = this.props.gameState.players[currentPlayerID - 1]
        const currentProperty = this.props.properties.properties[currentPlayer.position]

        if (!currentProperty.value || currentProperty.owner) {
            return false
        } else {
            return true
        }

    }

    buyProperty = () => {
        const currentPlayerID = this.props.gameState.currentPlayer
        const currentPlayer = this.props.gameState.players[currentPlayerID - 1]
        const currentProperty = this.props.properties.properties[currentPlayer.position]

        if (currentPlayer.money < currentProperty.value) {
            alert(`Not enough money to purchase ${currentProperty.name}`)
        } else {
            currentProperty.owner = currentPlayer
            currentPlayer.properties.push(currentProperty)
            const check = currentPlayer.checkCompleteGroupOwned(currentProperty)

            // handles station rents
            if (currentProperty.group === 'station') {
                let stations = check.group
                stations.forEach(station => {
                    station.rentIndex = stations.length - 1
                })
            } else if (currentProperty.group === 'utility') {
                let utilities = currentPlayer.countPropertiesInGroup(currentProperty)
                let utilityProperties = check.group
                utilityProperties.forEach(utility => {
                    utility.rentIndex = utilities
                })
            }

            if (check.check === true) {
                check.group.map(property => {
                    if (property.housePrice !== null) {
                        property.rentIndex = 1
                    }
                })
            }
            this.props.pay(currentPlayerID, currentProperty.value)
            this.props.addLog(`Player ${currentPlayerID} has bought ${currentProperty.name} for £${currentProperty.value}`)
        }
    }

    showAuction = () => {
        const currentPlayerID = this.props.gameState.currentPlayer
        const currentPlayer = this.props.gameState.players[currentPlayerID - 1]
        const currentProperty = this.props.properties.properties[currentPlayer.position]
        this.props.showAuctionModal()
        this.props.setAuctionPlayers()
        this.props.hideBuyModal()
        this.props.addLog(`${currentProperty.name} is on auction`)
    }


    render() {
        const { showBuyModal } = this.props.gameState
        const currentPlayerID = this.props.gameState.currentPlayer
        const currentPlayer = this.props.gameState.players[currentPlayerID - 1]
        const currentProperty = this.props.properties.properties[currentPlayer.position]
        const canBeBought = this.canBeBought()
        return (
            
            <div>
                {(showBuyModal === true && canBeBought) &&
                    <div className='buy-modal'>
                        <p>{ `Would you like to purchase ${currentProperty.name} for £${currentProperty.value}?` }</p>
                        <button onClick={ () => this.buyProperty() }>YES</button>
                        <button onClick={ () => this.showAuction() }>NO</button>
                    </div>
                }
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
    hideBuyModal,
    pay,
    showAuctionModal,
    setAuctionPlayers,
    addLog
}

export default connect(mapStateToProps, mapDispatchToProps)(Buy)