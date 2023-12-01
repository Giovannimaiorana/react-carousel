import React, { useState, useEffect } from "react";
import style from "../css/modules/TheCarousel.module.css";
import img1 from "../assets/fotouno.jpg";
import img2 from "../assets/fotodue.jpg";
import img3 from "../assets/fototre.jpg";
import img4 from "../assets/fotoquattro.jpg";
import img5 from "../assets/img5.jpg";
const slides = [
  {
    image: img1,
    text: "SAMU MA",
  },
  {
    image: img2,
    text: "SECONDO",
  },
  {
    image: img3,
    text: "TE",
  },
  {
    image: img4,
    text: "ENTRA?",
  },
  {
    image: img5,
    text: "NON ENTRA",
  },
];

export default function TheCarousel() {
  //usestate
  const [currentSlide, setCurrentSlide] = useState(0);
  //function per andare avanti
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  //function per andare indietor
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };
  //useEffect() x timer
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);
  //funzione per bullet
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={style.carouselContainer}>
      <div className={style.carouselElement}>
        <img
          className={style.imgStyle}
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
        />
        <p className={style.testoCard}>{slides[currentSlide].text}</p>
        <button className={style.buttonPrev} onClick={prevSlide}>
          &lt;
        </button>
        <button className={style.buttonNext} onClick={nextSlide}>
          &gt;
        </button>
        <div className={style.bulletsContainer}>
          {slides.map((slide, index) => (
            <div
              className={
                index === currentSlide ? style.activeBullet : style.bullets
              }
              key={index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
