import React, { Component } from 'react'

import properties from '../../config/property'

// style import
import './style.scss'

// component imports
import GameContainer from '../GameContainer'
import PlayerStatsContainer from '../PlayerStatsContainer'

class App extends Component {

    render() {
        return(
            <div className='board-container'>
                <GameContainer properties={ properties }/>
                <PlayerStatsContainer 
                    setMoveValue={ this.setMoveValue }
                />
            </div>
        )
    }
}

export default App