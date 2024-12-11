import React, { useState } from "react";
import "../styles/components/Carousel.scss";
import "../styles/animations/Carousel.scss";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setisActive] = useState(false);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setisActive(!isActive);
  };
  if (!pictures || pictures.length === 0) {
    return <div className="carousel">No pictures available</div>;
  }
  return (
    <div className="carousel">
      <div
        className="carousel__image"
        style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
      ></div>
      {pictures.length > 1 && (
        <>
          <button
            className="carousel__button carousel__button--previous"
            onClick={goToPrevious}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            className="carousel__button carousel__button--next"
            onClick={goToNext}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <div className="carousel__indicator">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
