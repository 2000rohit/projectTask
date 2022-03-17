import React, { useEffect } from 'react'

import Tshirt from '../Component/Tshirt'

import { getProduct } from '../Redux/Action/action'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../Component/Loading'
import Error from '../Component/Error'

const HomeScreen = () => {
  const mystate = useSelector((state) => state.getApiReducer)
  const { products, loading, error } = mystate
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  return (
    <main
      style={{ padding: '4rem', display: 'flex', justifyContent: 'center' }}
    >
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error='Something went wrong' />
      ) : (
        <div className='row' style={{ minHeight: '100vh' }}>
          {products.map((item, index) => {
            return (
              <div key={index} className='col-lg-4 col-md-6 col-sm-12'>
                <div className='d-flex justify-content-center'>
                  <Tshirt item={item} />
                </div>
              </div>
            )
          })}
        </div>
      )}
    </main>
  )
}

export default HomeScreen
