import React, { Component } from 'react'

class PlayerStats extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <div>
                    { this.props.player }
                </div>
                <div>
                    { this.props.playerMoney }
                </div>
            </div>
        )
    }
}

export default PlayerStats