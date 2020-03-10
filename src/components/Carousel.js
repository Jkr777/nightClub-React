import React from 'react';
import Slider from 'react-slick';
import two from '../images/photo-1445965752525-ac2d3c195ffe.jpeg';
import three from '../images/photo-1549046666-7c422ab19783.jpeg';


const Carousel = props => {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    arrows: false,
    speed: 800
  };

  return (
    <div className="carousel"
    style={{
      height: `${window.innerHeight}px`,
      overflow: "hiden"
    }} >
      <Slider {...settings}>
        <div>
          <div className="carousel__img" style={{background: `url(${props.guestImg})`, height: `${window.innerHeight}px`}}></div>
        </div>
        <div>
          <div className="carousel__img" style={{background: `url(${two})`, height: `${window.innerHeight}px`}}></div>
        </div>
        <div>
          <div className="carousel__img" style={{background: `url(${three})`, height: `${window.innerHeight}px`}}></div>
        </div>
      </Slider>
    </div>  
  )
};

export default Carousel;