import React from 'react'
import './CartScreen.css'

import { deleteFromCart } from '../../Redux/Action/cartAction'

import { useSelector, useDispatch } from 'react-redux'

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer)
  const cartItems = cartState.cartItems
  console.log(cartItems)
  var subTotal = cartItems.reduce((x, item) => x + item.price, 0)

  const dispatch = useDispatch()

  return (
    <div>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-6'>
          <h1>My Cart</h1>

          {cartItems &&
            cartItems.map((item) => {
              return (
                <div
                  className='m-3 p-3 flex-container'
                  key={item._id}
                  style={{
                    boxShadow: '0 0  0.8rem black',
                    textAlign: 'center',
                  }}
                >
                  <h5 className='card-title'>{item.name}</h5>
                  <div className='w-100 d-flex justify-content-center'>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ height: '8rem', width: '8rem' }}
                    />
                  </div>
                  <div
                    className='m-4 w-100 d-flex justify-content-around'
                    style={{ textAlign: 'left' }}
                  >
                    <h1 style={{ fontSize: '1.4rem' }}>
                      {Math.round(item.price)} ₹
                    </h1>
                    <div>
                      <h1 style={{ display: 'inline', fontSize: '1.4rem' }}>
                        Quantity : &nbsp;
                      </h1>
                      <b style={{ fontSize: '1rem' }}>{item.quantity}</b>
                    </div>
                  </div>

                  <div className='w-100 d-flex justify-content-center align-items-center'>
                    <i
                      className='fas fa-trash'
                      onClick={() => {
                        dispatch(deleteFromCart(item))
                      }}
                    ></i>
                  </div>
                </div>
              )
            })}
        </div>
        <div className='col-md-4' style={{ textAlign: 'right' }}>
          <h2 style={{ fontSize: '1.5rem' }}>
            Subtotal: {Math.round(subTotal)} ₹
          </h2>
          <button className='btn' onClick={() => alert('Pay btn clicked')}>
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartScreen
