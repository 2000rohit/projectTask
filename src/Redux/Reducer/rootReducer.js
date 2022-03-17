import { combineReducers } from 'redux'
import getApiReducer from './getApiReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
  getApiReducer,
  cartReducer,
})

export default rootReducer
