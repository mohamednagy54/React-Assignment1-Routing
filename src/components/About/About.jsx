import React from 'react'
import './About.css'
import { FaStar } from 'react-icons/fa'

const About = () => {
  return (
    <div className="about text-white d-flex justify-content-center align-items-center text-center">
      <div className="about-content container">
        <h2 className="text-uppercase fs-1 fw-bolder">About Component</h2>
        <div className="star d-flex justify-content-center align-items-center mb-3">
          <div className="line me-4"></div>
          <FaStar fontSize={20} className="icon" />
          <div className="line ms-4"></div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
