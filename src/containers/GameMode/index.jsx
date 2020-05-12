import React, { Component } from 'react'

import { changeGamemode } from '../../redux/actions/game'

import MainImage from './startmenu.png'

import './style.scss'
import { connect } from 'react-redux'

class GameMode extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='App'>
                <div className='MainBox'>
                    <div className="HeaderBox">
                        <img className="imageClass" src={ MainImage } alt="main"></img>
                        <div className="headerCentered">Choose Game Mode</div>
                    </div>
                    <button 
                        className='menu-button'
                        onClick={}
                    >
                        Easy
                    </button>
                    <button 
                        className='menu-button'
                        onClick={}
                    >
                        Not Easy
                    </button>
                </div>
                <div className='bottom-setup'>
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
    changeGamemode
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup)