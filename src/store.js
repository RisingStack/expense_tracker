import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import reduxThunk from 'redux-thunk'

export default createStore(rootReducer, applyMiddleware(reduxThunk))
