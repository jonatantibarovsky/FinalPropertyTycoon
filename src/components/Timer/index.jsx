import React, { Component } from 'react'
import { connect } from 'react-redux'

import { countFunds } from '../../redux/actions/game'

class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            minutes: 1,
            seconds: 0
        }
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                    this.props.countFunds()
                    ('end')
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }

    componentWillMount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        const winner = this.props.game.playerFunds
        return(
            <div>
                Time Remaining: { minutes }:{ seconds < 10 ? `0${ seconds }` : seconds }
                {this.props.game.winner !== null &&
                    <div>
                        Winner: { `Player ${this.props.game.winner + 1}` }
                    </div>
                    }
            </div>
        )
    }
}

const mapDispatchToProps = {
    countFunds
}

const mapStateToProps = (state) => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)