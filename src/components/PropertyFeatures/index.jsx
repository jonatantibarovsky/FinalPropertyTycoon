import React, { Component } from 'react'

class PropertyFeatures extends Component {
    constructor(props) {
        super(props)
    }

    isDeveloped = (property) => {
        const check = property.owner.checkCompleteGroupOwned(property)
        
        if (check.check === true && property.rentIndex !== 0) {
            return true
        } else {
            return false
        }   
    }

    // mortgage property
    mortgage = (property) => {

    }

    // sell house
    sell = (property) => {
        property.rentIndex -= 1
    }

    render() {  
        
        return (
            <div>
                {this.props.property.name}
                <div>
                    {this.props.property.housePrice !== null &&
                        <button>{`Buy house for £${this.props.property.housePrice}`}</button>
                    }
                    {this.isDeveloped(this.props.property) &&
                        <div>
                            <button onClick={ this.sell(this.props.property) }>Sell one house</button>
                            <div>{ this.props.property.rentIndex - 1 }</div>
                        </div>
                    }
                </div>
                {!this.isDeveloped(this.props.property) && 
                    <button>Mortgage</button>
                }
            </div>
        )
    }
}

export default PropertyFeatures