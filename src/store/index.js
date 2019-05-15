import { createStore, compose, applyMiddleware } from 'redux'
import myReducer from './Reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const store = createStore(
    myReducer,
    composeEnhancers(
        applyMiddleware(thunk, logger)
    )
)

export default store;