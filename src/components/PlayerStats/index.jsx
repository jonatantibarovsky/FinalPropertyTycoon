import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

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


    render() {
        let properties = this.props.properties.map(property => <div>{ property.name }</div>)
        return(
            <div>
                <div>
                    { this.props.player }
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

export default PlayerStats