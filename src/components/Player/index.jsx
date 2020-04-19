import React, { Component } from 'react'

class Player extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let color
        switch (this.props.playerID) {
            case 1:
                color = 'yellow'
                break
            case 2:
                color = 'lightsalmon'
                break
            case 3:
                color = 'tan'
                break
            case 4:
                color = 'hotpink'
                break
            case 5:
                color = 'lime'
                break
            case 6:
                color = 'aqua'
                break
            case 7:
                color = 'crimson'
                break
            case 8:
                color = 'orange'
                break
            default:
                break
        }
        return(
            <div style={{ background: color }}>
              { this.props.playerID }  
            </div>
        )
    }
}

export default Player