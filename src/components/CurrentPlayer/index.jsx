import React, { Component } from 'react'
import { connect } from 'react-redux'

class CurrentPlayer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                { `Current player: Player ${ this.props.game.currentPlayer }` }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(CurrentPlayer)