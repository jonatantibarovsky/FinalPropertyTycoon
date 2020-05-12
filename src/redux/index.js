import { createStore, combineReducers } from 'redux'

import { game } from './reducers'

const reducers = combineReducers({
    game
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    (store.getState())
})

export default store