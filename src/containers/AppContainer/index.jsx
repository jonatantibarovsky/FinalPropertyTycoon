import React, { Component } from 'react'

import App from '../App'
import Menu from '../../components/Menu'
import HowTo from '../HowTo'
import Setup from '../Setup'
import SetNumberOfPlayers from '../SetNumberOfPlayers'

import { connect } from 'react-redux'

import './style.scss'

class AppContainer extends Component {

    render() {
        let component = <Menu />
        switch (this.props.game.setup) {
            case 1:
                component = <Menu />
                break
            case 2:
                component = <HowTo />
                break
            case 3:
                component = <App />
                break
            case 4:
                component = <Setup />
                break
            case 5:
                component = <SetNumberOfPlayers />
                break
            default:
                break
        }
        return(
            <div className='container'>
                {component}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(AppContainer)