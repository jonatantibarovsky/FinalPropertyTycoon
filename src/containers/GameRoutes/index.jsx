import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// component imports
import Menu from '../../components/Menu'
import App from '../App'

const GameRoutes = () => {
    return(
        <Router>
            <Switch>
                <Route component={ Menu } exact path='/' />
                <Route component={ App } path='/game'/>
            </Switch>
        </Router>
    )
}

export default GameRoutes