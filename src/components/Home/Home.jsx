import React from 'react'
import './Home.css'
import avatar from '../../assets/avataaars.svg'
import { FaStar } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="home text-white d-flex justify-content-center align-items-center">
      <div className="home-content text-center">
        <img src={avatar} alt="avatar" />
        <div className="info text-center mt-4 mb-3">
          <h2 className="text-uppercase fs-1 fw-bolder">Start Framework</h2>
          <div className="star d-flex justify-content-center align-items-center mb-3">
            <div className="line me-4"></div>
            <FaStar fontSize={20} className="icon" />
            <div className="line ms-4"></div>
          </div>
          <p className="workInfo">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
