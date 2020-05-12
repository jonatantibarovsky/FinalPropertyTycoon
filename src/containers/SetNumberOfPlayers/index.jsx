import React, { Component } from 'react'

import { changeSetupIndex, changePlayersCount } from '../../redux/actions/game'

import MainImage from './startmenu.png'

import './style.scss'
import { connect } from 'react-redux'

class Setup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentPlayer: 0
        }
    }

    handleClick = (number) => {
        this.props.changePlayersCount(number)
        this.props.changeSetupIndex(4)
    }
    render() {
        return(
            <div className='App'>
                <div className='MainBox'>
                    <div className="HeaderBox">
                        <img className="imageClass" src={ MainImage } alt="main"></img>
                        <div className="headerCentered">Number of Players</div>
                    </div>
                    <div>
                        <button className='button' onClick={() => this.handleClick(2)}>2</button>
                        <button className='button' onClick={() => this.handleClick(3)}>3</button>
                        <button className='button' onClick={() => this.handleClick(4)}>4</button>
                        <button className='button' onClick={() => this.handleClick(5)}>5</button>
                        <button className='button' onClick={() => this.handleClick(6)}>6</button>
                    </div>
                </div>
                <div className='bottom-setup'>
                    <button 
                        className='menu-button'
                        onClick={() => this.props.changeSetupIndex(1)}
                    >
                        Menu
                    </button>
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
    changeSetupIndex,
    changePlayersCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup)