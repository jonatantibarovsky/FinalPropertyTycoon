import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changePlayersCount } from '../../redux/actions/game'
import './style.css'

import MainImage from './startmenu.png'

class StartMenu extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        console.log(this.props)
        return(
            <div className='App'>
                <div className="MainBox">
                    <div className="HeaderBox">
                        <img className="imageClass" src={ MainImage } alt="main"></img>
                        <div className="headerCentered">Property Tycoon</div>
                    </div>
                    <Link 
                        to='/game' 
                        onClick={ () => this.props.changePlayersCount(4) }
                        className="button1"
                    >
                        PLAY
                    </Link>
                    <button className="button2">HOW TO PLAY</button>
                    <h4>By Watson Games</h4>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    changePlayersCount
}

export default connect(null, mapDispatchToProps)(StartMenu)