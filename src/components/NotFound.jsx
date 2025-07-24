import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="not-found d-flex justify-content-center align-items-center">
      <div className="portfolio-title text-center pb-4 text-danger">
        <h2 className="text-uppercase fs-1 fw-bolder">Not Found Page</h2>
        <Link to="/" className='text-decoration-none text-bg-info'>
          <p>return to home page</p>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
