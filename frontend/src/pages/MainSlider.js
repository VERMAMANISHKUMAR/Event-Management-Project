import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/MainSlider.css";
import slider1 from '../assets/image/Slider/Slider-1.jpg'
import slider2 from '../assets/image/Slider/Slider-2.jpg'
import slider3 from '../assets/image/Slider/Slider-4.jpg'
const EventHomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: slider1,
      title: "Annual Tech Conference",
      description: "Join the biggest tech event of the year with top speakers and workshops!",
      buttonText: "Learn More",
    },
    {
      image: slider2,
      title: "Music Festival 2025",
      description: "Experience an unforgettable night with world-class artists and performances!",
      buttonText: "Get Tickets",
    },
    {
      image: slider3,
      title: "Startup Expo",
      description: "Network with investors and showcase your startup to the world!",
      buttonText: "Register Now",
    },
  ];

  return (
    <div className="event-home">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={slide.title} className="slide-image" />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button className="slide-button">{slide.buttonText}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventHomePage;
