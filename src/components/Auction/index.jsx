import React, { Component } from 'react'
import { connect } from 'react-redux'

class Auction extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div>
                {this.props.gameState.showAuctionModal &&
                    <div>Auction</div>
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