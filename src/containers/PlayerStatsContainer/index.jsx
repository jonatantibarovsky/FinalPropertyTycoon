import React, { Component } from 'react'
import { connect } from 'react-redux'

// component imports
import PlayerStats from '../../components/PlayerStats'

class PlayerStatsContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let playerStats = this.props.game.players.map((player) => 
            <PlayerStats 
                key={ player.id } 
                player={ player.name } 
                playerMoney={ player.money } 
                properties={ player.properties }
                id={ player.id }
            />
        )

        return(
            <div>
                { playerStats }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(PlayerStatsContainer)