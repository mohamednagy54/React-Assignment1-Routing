import React from 'react'
import { FaStar } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact d-flex justify-content-center  pt-4">
      <div className="contact-content container ">
        <div
          className="portfolio-title text-center pb-4"
          style={{ color: 'rgb(44, 62, 80) ' }}
        >
          <h2 className="text-uppercase fs-1 fw-bolder">conatct section</h2>
          <div className="star d-flex justify-content-center align-items-center mb-4">
            <div
              className="line me-4"
              style={{ background: 'rgb(44, 62, 80) ' }}
            ></div>
            <FaStar fontSize={20} className="icon" />
            <div
              className="line ms-4"
              style={{ background: 'rgb(44, 62, 80) ' }}
            ></div>
          </div>
        </div>

        <form className="w-50 mx-auto mt-5 p-2">
          <div className="mb-4 position-relative">
            <input
              type="text"
              id="userName"
              className="form-control border-0 border-bottom py-3"
              placeholder="userName"
            />
            <label htmlFor="userName" className="form-label">
              userName:
            </label>
          </div>
          <div className="mb-4 position-relative">
            <input
              type="text"
              id="userAge"
              className="form-control border-0 border-bottom py-3"
              placeholder="userAge"
            />
            <label htmlFor="userAge" className="form-label">
              userAge:
            </label>
          </div>
          <div className="mb-4 position-relative">
            <input
              type="email"
              id="userEmail"
              className="form-control border-0 border-bottom py-3"
              placeholder="userEmail"
            />
            <label htmlFor="userEmail" className="form-label">
              userEmail:
            </label>
          </div>
          <div className="mb-4 position-relative">
            <input
              type="text"
              id="userPassword"
              className="form-control border-0 border-bottom py-3"
              placeholder="userPassword"
            />
            <label htmlFor="userPassword" className="form-label">
              userPassword:
            </label>
          </div>

          <button className="submitBtn btn px-4">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
