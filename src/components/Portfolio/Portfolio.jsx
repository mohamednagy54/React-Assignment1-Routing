import React, { useState } from 'react'
import { FaPlus, FaStar } from 'react-icons/fa'
import port1 from '../../assets/port1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'
import './Portfolio.css'

const Portfolio = () => {

  const [selectedImage, setSelectedImage] = useState(null)
  const [showModal, setShowModal] = useState(false)



  return (
    <div className="portfolio d-flex justify-content-center  text-center pt-4">
      <div
        className="portfolio-content container"
        style={{ color: 'rgb(44, 62, 80) ' }}
      >
        <div className="portfolio-title">
          <h2 className="text-uppercase fs-1 fw-bolder">Portfolio Component</h2>
          <div className="star d-flex justify-content-center align-items-center mb-3">
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

        <div className="row g-5">
          <div className="col-md-6 col-lg-4">
            <div className="item rounded-3 position-relative overflow-hidden">
              <img src={port1} className="w-100 rounded-3" alt="port-1" />

              <div
                className="layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                onClick={() => {
                  setSelectedImage(port1)
                  setShowModal(true)
                }}
              >
                <FaPlus color="white" fontSize={80} />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="item rounded-3 position-relative overflow-hidden">
              <img src={port2} className="w-100 rounded-3" alt="port-2" />

              <div
                className="layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                onClick={() => {
                  setSelectedImage(port2)
                  setShowModal(true)
                }}
              >
                <FaPlus color="white" fontSize={80} />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="item rounded-3 position-relative overflow-hidden">
              <img src={port3} className="w-100 rounded-3" alt="port-3" />

              <div
                className="layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                onClick={() => {
                  setSelectedImage(port3)
                  setShowModal(true)
                }}
              >
                <FaPlus color="white" fontSize={80} />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="item rounded-3 position-relative overflow-hidden">
              <img src={port1} className="w-100 rounded-3" alt="port-1" />

              <div
                className="layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                onClick={() => {
                  setSelectedImage(port1)
                  setShowModal(true)
                }}
              >
                <FaPlus color="white" fontSize={80} />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="item rounded-3 position-relative overflow-hidden">
              <img src={port2} className="w-100 rounded-3" alt="port-2" />

              <div
                className="layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                onClick={() => {
                  setSelectedImage(port2)
                  setShowModal(true)
                }}
              >
                <FaPlus color="white" fontSize={80} />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="item rounded-3 position-relative overflow-hidden">
              <img src={port3} className="w-100 rounded-3" alt="port-3" />

              <div
                className="layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                onClick={() => {
                  setSelectedImage(port3)
                  setShowModal(true)
                }}
              >
                <FaPlus color="white" fontSize={80} />
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <div
            className="modal fade show"
            style={{ display: 'block', backgroundColor: 'rgba(13,110,253,.3)' }}
            tabIndex="-1"
            onClick={() => setShowModal(false)}
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content w-75 m-auto">
                <div className="modal-body p-0">
                  <img src={selectedImage} alt="Selected" className="w-100" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Portfolio
