import React, { Component } from 'react'

import { changeSetupIndex, setIcon } from '../../redux/actions/game'

import MainImage from './startmenu.png'
import BootIcon from './icons/boot.png'
import CatIcon from './icons/cat.png'
import CupIcon from './icons/cup.png'
import HatstandIcon from './icons/hatstand.png'
import PhoneIcon from './icons/phone.png'
import SpoonIcon from './icons/spoon.png'

import Icon from '../../components/Icon'

import './style.scss'
import { connect } from 'react-redux'

class Setup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentPlayer: 0,
            show: true
        }

        this.icons = [<button onClick={() => this.handleClick('BootIcon', 0)}><Icon icon={BootIcon} /></button>,
                    <button onClick={() => this.handleClick('CatIcon', 1)}><Icon icon={CatIcon} /></button>,
                    <button onClick={() => this.handleClick('CupIcon', 2)}><Icon icon={CupIcon} /></button>,
                    <button onClick={() => this.handleClick('HatstandIcon', 3)}><Icon icon={HatstandIcon} /></button>,
                    <button onClick={() => this.handleClick('PhoneIcon', 4)}><Icon icon={PhoneIcon} /></button>,
                    <button onClick={() => this.handleClick('SpoonIcon', 5)}><Icon icon={SpoonIcon} /></button>]
    }

    handleClick = (icon, index) => {
        this.props.setIcon(this.state.currentPlayer, icon)
        this.icons.splice(index, 1)
        
        this.setState({
            currentPlayer: this.state.currentPlayer + 1
        }, () => {
            if (this.state.currentPlayer === this.props.game.players.length) {
                this.icons = []
                this.props.changeSetupIndex(3)
                this.setState({
                    show: false
                })
            }
        })


    }

    render() {
        const players = this.props.game.players
        
        const iconsToRender = this.icons.map(icon => {
            return <div className='icon-container'>{icon}</div>
        })
        
        return(
            <div className='App'>
                <div className='MainBox'>
                    <div className="HeaderBox">
                        <img className="imageClass" src={ MainImage } alt="main"></img>
                        {players.length !== this.state.currentPlayer &&
                            <div className="headerCentered">{ players[this.state.currentPlayer].name }</div>
                        }
                    </div>
                    <div className='icons'>
                        { iconsToRender }
                    </div>
                </div>
                <div className='bottom-setup'>
                    <button 
                        className='menu-button'
                        onClick={() => this.props.changeSetupIndex(1)}
                    >
                        Menu
                    </button>
                    <p className='icon-text'>Choose an icon</p>
                    <button className='button' onClick={() => this.props.changeSetupIndex(3)}>Next</button>
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
    setIcon
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup)