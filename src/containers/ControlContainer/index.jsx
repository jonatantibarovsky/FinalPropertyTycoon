import React, { Component } from 'react'

import { changeCurrentPlayer, setRolledFalse,
        addLog } from '../../redux/actions/game'
import { connect } from 'react-redux'
import Dice from '../../components/Dice'
import Buy from '../../components/Buy'
import Auction from '../../components/Auction'
import GameLog from '../../components/GameLog'
import CurrentPlayer from '../../components/CurrentPlayer'

class ControlContainer extends Component {
    constructor(props) {
        super(props)
    }

    endTurnHandleCLick = () => {
        this.props.changeCurrentPlayer()
        if (this.props.gameState.currentPlayer === 4) {
            this.props.addLog(`Player 1's turn`)
        } else {
            this.props.addLog(`Player ${ this.props.gameState.currentPlayer + 1 }'s turn`)
        }
        this.props.setRolledFalse()
    }

    render() {
        return(
            <div>
                <CurrentPlayer />
                <Dice 
                    properties={ this.props.properties }
                    potlucks={ this.props.potlucks }
                    opportunityKnocks={ this.props.opportunityKnocks }
                />
                <Auction properties={ this.props.properties }/>
                <Buy properties={ this.props.properties }/>
                <GameLog />
                <button onClick={ () => this.endTurnHandleCLick() }>END TURN</button>
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
    changeCurrentPlayer,
    setRolledFalse,
    addLog
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlContainer)