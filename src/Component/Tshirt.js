import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

import { addToCart } from '../Redux/Action/cartAction'
import { useDispatch } from 'react-redux'
import ReactStars from 'react-rating-stars-component'

const Tshirt = ({ item }) => {
  const dispatch = useDispatch()
  const [quantity, setquantity] = useState(1)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const addtocart = () => {
    dispatch(addToCart(item, quantity))
  }
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }

  return (
    <>
      <div
        className='card shadow-lg m-3 p-3 bg-white rounded'
        style={{ width: '20rem', height: '27rem' }}
        key={item._id}
      >
        <div className='card-header'>
          <div onClick={handleShow} style={{ cursor: 'pointer' }}>
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
                alt={item.title}
                style={{ height: '100%', width: '100%' }}
              />
            </div>
          </div>
        </div>
        <div className='card-body'>
          <div style={{ height: '4rem' }}>
            <h5 className='card-title' style={{ padding: '0.6rem' }}>
              {item.title && item.title.length > 20
                ? item.title.split(' ').slice(0, 4).join(' ') + '...'
                : item.title}
            </h5>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              color: 'blue',
            }}
          >
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={18}
              value={item.rating.rate}
              emptyIcon={<i className='far fa-star'></i>}
              halfIcon={<i className='fa fa-star-half-alt'></i>}
              fullIcon={<i className='fa fa-star'></i>}
              activeColor='#ffd700'
            />
            {item.rating.count} ratings
          </div>
          <div className='w-100 m-1 d-flex justify-content-between '>
            <div className='d-flex justify-content-between align-items-center'>
              <h6 style={{ paddingRight: '1rem' }}>Quantity</h6>
              <select
                id='cars'
                aria-label='.form-select-lg example'
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
            {Math.round(item.price * quantity)} ₹
          </div>

          <button
            className='btn mt-2'
            style={{ backgroundColor: 'orange', width: '100%' }}
            onClick={addtocart}
          >
            Add To Cart
          </button>
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
