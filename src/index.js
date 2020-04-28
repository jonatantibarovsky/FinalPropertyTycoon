import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux'

// component imports
import GameRoutes from './containers/GameRoutes'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <GameRoutes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)