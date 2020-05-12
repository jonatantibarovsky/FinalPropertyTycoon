import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Player from '../Player'
import "../styles/board.scss"

const RightColorBlock = styled.section`
    height: 60px;
    min-width: 15px;
    background: ${props => props.color ? "#008000" : "#0000FF"};
    border-right: 1px solid black;
`
const LeftColorBlock = styled.section`
    height: 60px;
    width: 15px;
    background: ${props => props.color ? "#FF69B4" : "#FFA500"};
    border-left: 1px solid black;
`
const TopColorBlock = styled.section`
    height: 15px;
    width: 60px;
    background: ${props => props.color ?  "#FF0000" : "#FFFF00"};
    border-top: 1px solid black;
`
const BottomColorBlock = styled.section`
    height: 15px;
    width: 59px;
    background: ${props => props.color ? "#8B4513" : "#87CEEB"};
    border-bottom: 1px solid black;
`

/**
 * Square component, each property in the game is a square component
 */
class Square extends Component {
    constructor(props) {
        super(props)
    }

    getColorForProperty = (index, group) => {
        if ((this.getClassName(index, group) === 'top') && group === 'red') {
            return <TopColorBlock color/>
        } else if (this.getClassName(index, group) === 'top') {
            return <TopColorBlock />
        } else if ((this.getClassName(index, group) === 'bottom') && (group === 'brown')) {
            return <BottomColorBlock color/>
        } else if (this.getClassName(index, group) === 'bottom') {
            return <BottomColorBlock />
        } else if ((this.getClassName(index, group) === 'right') && (group === 'green')) {
            return <RightColorBlock color/>
        } else if (this.getClassName(index, group) === 'right') {
            return <RightColorBlock />
        } else if ((this.getClassName(index, group) === 'left') && (group === 'pink')) {
            return <LeftColorBlock color/>
        } 
        else if (this.getClassName(index, group) === 'left') {
            return <LeftColorBlock />
        }
    }

    getClassName = (index, group) => {
        if([0, 10, 20, 30].includes(index) && !["bonus", "tax", "station", "utility"].includes(group)) {
            return "corner"
        } else if (index > 0 && index < 10 && !["bonus", "tax", "station", "utility"].includes(group)) {
            return "bottom"
        } else if (index > 10 && index < 20 && !["bonus", "tax", "station", "utility"].includes(group)) {
            return "left"
        } else if (index > 20 && index < 30 && !["bonus", "tax", "station", "utility"].includes(group)) {
            return "top"
        } else if (index > 30 && index < 40 && !["bonus", "tax", "station", "utility"].includes(group)) {
            return "right"
        } else {
            return ""
        }
    }

    render() {
        const { position, title, group } = this.props
        const squarePosition = this.getClassName(position)
        return(
            <div className={ "square outer " + squarePosition }>
                { this.getColorForProperty(position, group) }   
                <div className='inside-square'>
                    <p><strong>{ title }</strong></p>
                    <div className='player-position'>
                        { this.props.gameState.players.map(player => {
                            if (player.position === position) {
                                return <Player key={ player.id } playerID={ player.id }/>
                            }
                        }) }
                    </div>
                </div>                 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gameState: state.game
    }
}

export default connect(mapStateToProps)(Square)