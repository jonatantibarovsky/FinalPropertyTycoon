import React, { Component } from 'react'

import properties from '../../config/property'
import potlucks from '../../config/potluck'
import opportunityKnocks from '../../config/opportunityKnocks'

import { changeSetupIndex } from '../../redux/actions/game'

// style import
import './style.scss'

// component imports
import GameContainer from '../GameContainer'
import PlayerStatsContainer from '../PlayerStatsContainer'
import { connect } from 'react-redux'


// App container component
class App extends Component {

    // modern version of the Fisher-Yates shuffle algorithm
    shuffle = (cards) => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = cards[i]
            cards[i] = cards[j]
            cards[j] = temp
        }

        return cards
    }

    render() {
        const shuffledPotLucks = this.shuffle(potlucks.potlucks)
        const shuffledOpportunityKnocks = this.shuffle(opportunityKnocks.opportunityKnocks)
        return(
            <div className='game-container'>
                <div className='board-container'>
                    <GameContainer 
                        properties={ properties }
                        potlucks={ shuffledPotLucks }
                        opportunityKnocks={ shuffledOpportunityKnocks }
                    />
                    <PlayerStatsContainer 
                        setMoveValue={ this.setMoveValue }
                    />
                
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    changeSetupIndex
}

export default connect(null, mapDispatchToProps)(App)