import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Modal } from 'react-bootstrap'

import './style.scss'

class GameLog extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let gameLogs = this.props.game.gameLog.map((message, index) => <div key={ index }>{ message }</div>)
        return (
            <div>
                <Modal.Dialog>
                    <Modal.Body>
                        { gameLogs }
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(GameLog)