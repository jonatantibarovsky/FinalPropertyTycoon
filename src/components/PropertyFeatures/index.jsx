import React, { Component } from 'react'

import { getMoney, pay,
        addLog } from '../../redux/actions/game'
import { connect } from 'react-redux'

import './style.scss'

class PropertyFeatures extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isMortgaged: this.props.property.mortgaged
        }
    }

    isDeveloped = (property) => {
        const check = property.owner.checkCompleteGroupOwned(property)
        
        if (check.check === true && property.rentIndex !== 0) {
            return true
        } else {
            return false
        }   
    }

    unmortgage = (property) => {
        property.mortgaged = false
        const owner = property.owner
        this.props.pay(owner.id, property.value / 2)
        this.props.addLog(`${owner.name} has unmortgaged ${property.name}`)
        this.setState({
            isMortgaged: false
        })
    }

    // mortgage property
    mortgage = (property) => {
        property.mortgaged = true
        const owner = property.owner
        this.props.getMoney(owner.id, property.value / 2)
        this.props.addLog(`${owner.name} has mortgaged ${property.name}`)
        this.setState({
            isMortgaged: true
        })
    }

    sellProperty = (property) => {

    }

    // sell house
    sell = (property) => {
        property.rentIndex -= 1
        this.props.addLog(`${property.owner.name} has sold a house on ${property.name}`)
    }

    buyHouse = (property) => {
        property.rentIndex += 1
        this.props.addLog(`${property.owner.name} has bought a house on ${property.name}`)
    }

    render() {  
        let mortgage
        if (this.state.isMortgaged === true) {
            mortgage = <button className='stats-button' onClick={() => this.unmortgage(this.props.property)}>Unmortgage</button>
        } else if (this.state.isMortgaged === false) {
            mortgage = <button className='stats-button' onClick={() => this.mortgage(this.props.property)}>Mortgage</button>
        }
        
        return (
            <div className='prop-features'>
                {this.props.property.name}
                <div>
                    {(this.props.property.housePrice !== null && this.isDeveloped(this.props.property)) && this.state.isMortgaged === false &&
                        <button className='stats-button'>{`Buy house for £${this.props.property.housePrice}`}</button>
                    }
                    {this.isDeveloped(this.props.property) &&
                        <div>
                            <button className='stats-button' onClick={ () => this.sell(this.props.property) }>Sell one house</button>
                            <div>{ this.props.property.rentIndex - 1 }</div>
                        </div>
                    }
                </div>
                <button></button>
                {!this.isDeveloped(this.props.property) && 
                    mortgage
                }
            </div>
        )
    }
}

const mapDispatchToProps = {
    getMoney,
    pay,
    addLog
}

export default connect(null, mapDispatchToProps)(PropertyFeatures)