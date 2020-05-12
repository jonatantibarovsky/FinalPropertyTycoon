import React, { Component } from 'react'
import "../styles/board.scss"
import Square from '../Square'
import ControlContainer from '../../containers/ControlContainer'

/**
 * Board component
 */
class Board extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const propertyList = this.props.properties.properties.map(property => {
            const { position, name, group } = property
            return(
                <Square 
                    key={ position }
                    position={ position }
                    title={ name }
                    group={ group }
                    value={ this.props.properties[position] }
                />
            )
        })

        return (
            <div className='board'>
                <div className='top-row'>
                    { propertyList[20] }
                    { propertyList[21] }
                    { propertyList[22] }
                    { propertyList[23] }
                    { propertyList[24] }
                    { propertyList[25] }
                    { propertyList[26] }
                    { propertyList[27] }
                    { propertyList[28] }
                    { propertyList[29] }
                    { propertyList[30] }
                </div>
                <div className='side-rows'>
                    <div className='left-row'>
                        { propertyList[11] }
                        { propertyList[12] }
                        { propertyList[13] }
                        { propertyList[14] }
                        { propertyList[15] }
                        { propertyList[16] }
                        { propertyList[17] }
                        { propertyList[18] }
                        { propertyList[19] }
                    </div>
                    <div>
                        <ControlContainer 
                            properties={ this.props.properties }
                            potlucks={ this.props.potlucks }
                            opportunityKnocks={ this.props.opportunityKnocks }
                        />
                    </div>
                    <div className='right-row'>
                        { propertyList[31] }
                        { propertyList[32] }
                        { propertyList[33] }
                        { propertyList[34] }
                        { propertyList[35] }
                        { propertyList[36] }
                        { propertyList[37] }
                        { propertyList[38] }
                        { propertyList[39] }
                    </div>
                </div>
                <div className='bottom-row'>
                    { propertyList[0] }
                    { propertyList[1] }
                    { propertyList[2] }
                    { propertyList[3] }
                    { propertyList[4] }
                    { propertyList[5] }
                    { propertyList[6] }
                    { propertyList[7] }
                    { propertyList[8] }
                    { propertyList[9] }
                    { propertyList[10] }
                </div>
            </div>
        )
    }
}

export default Board