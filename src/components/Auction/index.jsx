import React, { Component } from 'react'
import { connect } from 'react-redux'

import { removeAuctionPlayer, pay, hideAuctionModal } from '../../redux/actions/game'

class Auction extends Component {
    constructor(props) {
        super(props)

        this.state = {
            highestBidder: null,
            highestBid: 0,
            currentBidder: 0,
            currentBid: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            currentBid: event.target.value
        })
    }

    bid = () => {
        //TODO: check if player has enough money to bid
        const { currentBid, highestBid, highestBidder, currentBidder } = this.state
        const bidAmount = parseInt(currentBid)
        if (Number.isInteger(bidAmount) && bidAmount !== 0) {
            if (bidAmount > highestBid) {
                this.setState({
                    highestBid: bidAmount,
                    highestBidder: this.props.gameState.playersInAuction[currentBidder],
                    currentBidder: (currentBidder + 1)  % this.props.gameState.playersInAuction.length
                })
            } else {
                alert('Bid needs to be greater than current highest bid.')
            }
        } else {
            alert('Bid amount must be an integer and not zero!')
        }
        
    }

    pass = () => {
        const currentPlayerID = this.props.gameState.currentPlayer
        const currentPlayer = this.props.gameState.players[currentPlayerID - 1]
        const currentProperty = this.props.properties.properties[currentPlayer.position]

        if (this.props.gameState.playersInAuction.length < 2 && this.state.highestBid === 0) {
            this.props.hideAuctionModal()
            alert('No bids.')
        } else if (this.props.gameState.playersInAuction.length < 2) {
            this.props.hideAuctionModal()
            const winner = this.props.gameState.playersInAuction[0]
            currentProperty.owner = winner
            winner.properties.push(currentProperty)
            this.props.pay(winner.id, currentProperty.value)
        } else {
            const { currentBidder } = this.state
            this.props.removeAuctionPlayer(this.props.gameState.playersInAuction[currentBidder].id)
        }
    }

    render() {
        const currentPlayerID = this.props.gameState.currentPlayer
        const currentPlayer = this.props.gameState.players[currentPlayerID - 1]
        const currentProperty = this.props.properties.properties[currentPlayer.position]
        return(
            <div>
                {this.props.gameState.showAuctionModal &&
                    <div>
                        <p>{ `Auction for ${currentProperty.name}` }</p>
                        <p>{ `Highest Bid: £${this.state.highestBid}` }</p>
                        {this.props.gameState.playersInAuction[this.state.currentBidder] &&
                            <p>{ `Current bidder: ${this.props.gameState.playersInAuction[this.state.currentBidder].name}` }</p>
                        }
                        <input type='text' pattern="[0-9]*" value={this.state.currentBid} onChange={ this.handleChange }/>
                        <button onClick={ () => this.bid() }>BID</button>
                        <button onClick={ () => this.pass() }>PASS</button>
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
    removeAuctionPlayer: removeAuctionPlayer,
    pay: pay,
    hideAuctionModal, hideAuctionModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Auction)