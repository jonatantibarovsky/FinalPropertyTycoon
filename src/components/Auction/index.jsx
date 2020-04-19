import React, { Component } from 'react'
import { connect } from 'react-redux'

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
        const { currentBid, highestBid, highestBidder, currentBidder } = this.state
        const bidAmount = parseInt(currentBid)
        if (Number.isInteger(bidAmount)) {
            console.log(currentBid)
        } else {
            alert('Bid amount must be an integer!')
        }
        
    }

    pass = () => {

    }
    
    auction = () => {

    }

    render() {
        console.log(this.state)
        const currentPlayerID = this.props.gameState.currentPlayer
        const currentPlayer = this.props.gameState.players[currentPlayerID - 1]
        const currentProperty = this.props.properties.properties[currentPlayer.position]
        return(
            <div>
                {this.props.gameState.showAuctionModal &&
                    <div>
                        <p>{ `Auction for ${currentProperty.name}` }</p>
                        <p>{ `Highest Bid: £${this.state.highestBid}` }</p>
                        <p>{ `Current bidder: ${this.props.gameState.playersInAuction[this.state.currentBidder].name}` }</p>
                        <input type='text' pattern="[0-9]*" value={this.state.currentBid} onChange={ this.handleChange }/>
                        <button onClick={ () => this.bid() }>BID</button>
                        <button>PASS</button>
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

export default connect(mapStateToProps)(Auction)