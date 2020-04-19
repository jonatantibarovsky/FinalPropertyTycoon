import React, { Component } from 'react'

import { changeCurrentPlayer, setRolledFalse } from '../../redux/actions/game'
import { connect } from 'react-redux'
import Dice from '../../components/Dice'
import Buy from '../../components/Buy'
import Auction from '../../components/Auction'

class ControlContainer extends Component {
    constructor(props) {
        super(props)
    }

    endTurnHandleCLick = () => {
        this.props.changeCurrentPlayer()
        this.props.setRolledFalse()
    }

    render() {
        return(
            <div>
                <button onClick={ () => this.endTurnHandleCLick() }>END TURN</button>
                <Dice />
                <Auction properties={ this.props.properties }/>
                <Buy properties={ this.props.properties }/>
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
    setRolledFalse
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlContainer)