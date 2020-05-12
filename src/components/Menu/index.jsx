import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changePlayersCount, changeSetupIndex } from '../../redux/actions/game'
import './style.css'
import MainImage from './startmenu.png'

/**
 * Main Menu component
 */
class StartMenu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='App'>
                <div className="MainBox">
                    <div className="HeaderBox">
                        
                        <img className="imageClass" src={ MainImage } alt="main"></img>
                        <div className="headerCentered">Property Tycoon</div>
                    </div>
                    <button 
                        to='/game' 
                        onClick={ () => this.props.changeSetupIndex(5) }
                        className="button1"
                    >
                        PLAY
                    </button>
                    <button 
                        className="button2"
                        onClick={() => this.props.changeSetupIndex(2)}
                    >
                        HOW TO PLAY
                    </button>
                    <h4>By Watson Games</h4>
                </div>
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
    changePlayersCount,
    changeSetupIndex
}

export default connect(mapStateToProps, mapDispatchToProps)(StartMenu)