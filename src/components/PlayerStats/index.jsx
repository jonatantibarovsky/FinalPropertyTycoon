import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

import PropertyFeatures from '../PropertyFeatures'

import { buyHouse, pay } from '../../redux/actions/game'
import { connect } from 'react-redux'

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
            <div>
                <div>
                    { this.props.player.name }
                    <div>
                        { this.props.playerMoney }
                    </div>
                </div>
                <div className='player-property-button'>
                    <button onClick={ this.showProperties }>Properties</button>
                </div>
                <Modal show={ this.state.showProperties } onHide={ this.hideProperties }>
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