import React, { Component } from 'react'

import Board from '../../components/Board'

class GameContainer extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div>
                <Board 
                    properties={ this.props.properties }
                    setMoveValue={ this.setMoveValue }
                    potlucks={ this.props.potlucks }
                    opportunityKnocks={ this.props.opportunityKnocks }
                />
            </div>
        )
    }
}

export default GameContainer