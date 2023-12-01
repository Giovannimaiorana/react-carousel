import React, { useState, useEffect } from "react";
import style from "../css/modules/TheCarousel.module.css";
import img1 from "../assets/fotouno.jpg";
import img2 from "../assets/fotodue.jpg";
import img3 from "../assets/fototre.jpg";
import img4 from "../assets/fotoquattro.jpg";

const slides = [
  {
    image: img1,
    text: "testo a caso",
  },
  {
    image: img2,
    text: "testo a caso",
  },
  {
    image: img3,
    text: "testo a caso",
  },
  {
    image: img4,
    text: "testo a caso",
  },
];

export default function TheCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };
  return (
    <div className={style.carouselContainer}>
      <div className={style.carouselElement}>
        <img
          className={style.imgStyle}
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
        />
        <button className={style.buttonPrev} onClick={prevSlide}>
          &lt;
        </button>
        <button className={style.buttonNext} onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
}
