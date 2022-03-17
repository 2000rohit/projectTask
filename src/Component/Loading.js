import React from 'react'

const Loading = () => {
  return (
    <div>
      <div
        className='spinner-border'
        role='status'
        style={{ height: '4rem', width: '4rem', marginTop: '1rem' }}
      >
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  )
}

export default Loading
