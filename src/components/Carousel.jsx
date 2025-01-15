import React from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Carousel = () => {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide "
        data-bs-ride="carousel"
      
      >
        <div className="carousel-inner h-[260px]">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={`https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/JanART/GW/Bestsellersinmakeup._CB552677309_.png`}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/thomsoja/Grocery/JanART25/GW/Unrec_PC_Hero_1500x600._CB553031440_.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/JanART/JanART25/Event/NordCE4Lite/PC_Hero_3000x1200_Lifestyle._CB552729992_.jpg"
              alt="Third slide"
            />
          </div>
                  
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <HiOutlineChevronLeft
            className="carousel-control-prev-icon"
            aria-hidden="true"
          />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <HiOutlineChevronRight
            className="carousel-control-next-icon"
            aria-hidden="true"
          />
          <span className="visually-hidden">Next</span>
        </button>
        </div>
        </div>
    );
};

export default Carousel;