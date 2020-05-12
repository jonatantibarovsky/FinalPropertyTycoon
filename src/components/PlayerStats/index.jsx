import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

import PropertyFeatures from '../PropertyFeatures'

import { buyHouse, pay } from '../../redux/actions/game'
import { connect } from 'react-redux'

import './style.scss'

import BootIcon from '../../containers/Setup/icons/boot.png'
import CatIcon from '../../containers/Setup/icons/cat.png'
import CupIcon from '../../containers/Setup/icons/cup.png'
import HatstandIcon from '../../containers/Setup/icons/hatstand.png'
import PhoneIcon from '../../containers/Setup/icons/phone.png'
import SpoonIcon from '../../containers/Setup/icons/spoon.png'

class PlayerStats extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showProperties: false
        }
    }


    showProperties = () => {
        this.setState({
            showProperties: true
        })
    }

    hideProperties = () => {
        this.setState({
            showProperties: false
        })
    }

    buyhouse = (owner, property) => {
        this.props.buyHouse(owner, property)
        this.props.pay(owner, property.housePrice)

    }


    render() {
        let properties = this.props.properties.map(property => <PropertyFeatures property={ property } />)
        return(
            <div className='stat'>
                <div className='stats-container'>
                    { this.props.player.name }
                    <div>
                        { this.props.playerMoney }
                    </div>
                    <div>
                        <button className='player-property-button' onClick={ this.showProperties }>Properties</button>
                    </div>
                </div>
                <Modal show={ this.state.showProperties } onHide={ this.hideProperties } >
                    <Modal.Header closeButton>
                        <Modal.Title>{ `Player ${this.props.id}` }</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        { properties }
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = {
    buyHouse,
    pay
}

export default connect(null, mapDispatchToProps)(PlayerStats)