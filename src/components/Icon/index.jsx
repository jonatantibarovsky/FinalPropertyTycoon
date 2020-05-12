import React, { Component } from 'react'
import './style.scss'

/**
 * Icon component
 */
class Icon extends Component {
    render() {
        return(
            <div className='icon-container'>
                <img className='actual-icon' src={this.props.icon}/>
            </div>
        )
    }
}

export default Icon