import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeSetupIndex } from '../../redux/actions/game'

import './style.scss'

// component imports
import PlayerStats from '../../components/PlayerStats'
import Timer from '../../components/Timer'

class PlayerStatsContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let playerStats = this.props.game.players.map((player) => 
            <PlayerStats 
                key={ player.id } 
                player={ player } 
                playerMoney={ player.money } 
                properties={ player.properties }
                id={ player.id }
            />
        )

        return(
            <div className='play-stats-cont'>
                <div className='playerStats'>
                    { playerStats }
                </div>
                <Timer />
                <button className='exit-button' onClick={() => this.props.changeSetupIndex(1)}>exit game</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        game: state.game
    }
}

const mapDispatchToProps = {
    changeSetupIndex
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerStatsContainer)