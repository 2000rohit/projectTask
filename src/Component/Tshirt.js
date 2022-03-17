import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

import { addToCart } from '../Redux/Action/cartAction'
import { useDispatch } from 'react-redux'

const Tshirt = ({ item }) => {
  const dispatch = useDispatch()
  const [quantity, setquantity] = useState(1)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const addtocart = () => {
    dispatch(addToCart(item, quantity))
  }

  return (
    <>
      <div
        className='card shadow-lg m-3 p-3 bg-white rounded'
        style={{ width: '20rem', height: '32rem' }}
        key={item._id}
      >
        <div className='card-header'>
          <h2>{item.category}</h2>
          <div onClick={handleShow}>
            <div
              className='img-hold'
              style={{
                margin: 'auto',
                height: '12rem',
                width: '12rem',
                backgroundColor: 'pink',
              }}
            >
              <img
                className='card-img-top'
                src={item.image}
                alt={item.category}
                style={{ height: '100%', width: '100%' }}
              />
            </div>
          </div>
        </div>
        <div className='card-body'>
          <h5 className='card-title'>
            {item.title && item.title.length > 20
              ? item.title.split(' ').slice(0, 4).join(' ') + '...'
              : item.title}
          </h5>
          <div className='w-100 m-1 d-flex justify-content-between'>
            <div>quantity</div>
            <div>
              <select
                id='cars'
                class='form-select form-select-sm mb-3'
                aria-label='.form-select-lg example'
                // style={{ width: '100%' }}
                value={quantity}
                onChange={(e) => {
                  setquantity(e.target.value)
                }}
              >
                {[...Array(10).keys()].map((i, ind) => (
                  <option key={ind} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            className='btn'
            style={{ backgroundColor: 'orange', width: '100%' }}
            onClick={addtocart}
          >
            Add To Cart
          </button>
          <p className='mt-2'>Price : {item.price * quantity} Rs/-</p>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{item.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body className='d-flex flex-column align-items-center justify-content-center'>
            <img
              src={item.image}
              alt={item.name}
              className='img-fluid'
              style={{ height: '12rem' }}
            />
            <p>{item.description}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button className='btn' onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Tshirt
