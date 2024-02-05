"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <div style={{
        marginTop: '6%',
        marginBottom: '3',
        backgroundColor: 'rgba(232, 195, 158, 0.7)',
        borderRadius: '20px' }}
        className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <Slider {...settings}>
        <div>
          <img src="../../assets/image1.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="../../assets/image3.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="../../assets/image2.jpg" alt="Image 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
      </div>
    </div>
  );
};
export default Carousel;