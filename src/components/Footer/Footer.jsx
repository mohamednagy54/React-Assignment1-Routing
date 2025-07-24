import React from 'react'
import './Footer.css'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'

import { FaTwitter } from 'react-icons/fa'
import { FaWebAwesome } from 'react-icons/fa6'
import { IoIosBrowsers } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row ">
        <div className="col-md-4">
          <div className="cardItem">
            <div className="card-body text-center">
              <h3 className="text-uppercase">Location</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cardItem mb-3">
            <div className="card-body text-center">
              <h3 className="text-uppercase">Around The Web</h3>
              <div className="icons">
                <span className="icon">
                  <FaFacebook  />
                </span>

                <span className="icon">
                  <FaTwitter  />
                </span>
                <span className="icon">
                  <FaLinkedin  />
                </span>

                <span className="icon">
                  <IoIosBrowsers  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cardItem">
            <div className="card-body text-center">
              <h3 className="text-uppercase">About Freelancer</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
