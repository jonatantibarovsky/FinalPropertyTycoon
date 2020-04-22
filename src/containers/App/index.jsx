import React, { Component } from 'react'

import properties from '../../config/property'
import potlucks from '../../config/potluck'
import opportunityKnocks from '../../config/opportunityKnocks'


// style import
import './style.scss'

// component imports
import GameContainer from '../GameContainer'
import PlayerStatsContainer from '../PlayerStatsContainer'

class App extends Component {

    // modern version of the Fisher-Yates shuffle algorithm
    shuffle = (cards) => {
        let currentIndex = cards.length
        let temp
        let randomIndex
        // While there ramin elements to shuffle
        while (currentIndex !== 0) {
            // Pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1

            // Swap it wth the current element
            temp = cards[currentIndex]
            cards[currentIndex] = cards[randomIndex]
            cards[randomIndex] = temp
        }
        return cards
    }

    render() {

        const shuffledPotLucks = this.shuffle(potlucks)
        const shuffledOpportunityKnocks = this.shuffle(opportunityKnocks)
        console.log(shuffledPotLucks)
        console.log(shuffledOpportunityKnocks)
        return(
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
        )
    }
}

export default App