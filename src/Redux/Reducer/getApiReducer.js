const initialState = {
  products: [],
}
const getApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CASE_GETPRODUCT_REQUEST':
      return {
        loading: true,
        ...state,
      }
    case 'CASE_GETPRODUCT_SUCCESS':
      return {
        loading: false,
        products: action.payload,
      }
    case 'CASE_GETPRODUCT_FAILED':
      return {
        loading: false,
        products: action.payload,
      }
    default:
      return state
  }
}

export default getApiReducer
