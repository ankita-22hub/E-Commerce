// src/components/MyComponent.jsx
import React from "react";
import Carousel from "./Carousel"; // Adjust the path if needed

const MyComponent = () => {
  return (
    <Carousel autoSlide autoSlideInterval={5000}>
      <img src="/images/img1.jpg" className="w-full" />
      <img src="/images/img2.jpg" className="w-full" />
      <img src="/images/img3.jpg" className="w-full" />
    </Carousel>
  );
};

export default MyComponent;
