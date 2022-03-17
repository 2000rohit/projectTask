import rootReducer from './Reducer/rootReducer'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'

const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const intialState = {
  cartReducer: {
    cartItems: cartItems,
  },
}

const composeEnhancer = composeWithDevTools({})

const store = createStore(
  rootReducer,
  intialState,
  composeEnhancer(applyMiddleware(thunk))
)

export default store
