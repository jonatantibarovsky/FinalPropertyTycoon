import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux'

import './style.scss'

// component imports
import AppContainer from './containers/AppContainer'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)