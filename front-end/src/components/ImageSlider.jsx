import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../Styles/ImageSlider.css";
import Gif from "../images/elearning.gif";
import Gif2 from "../images/online-learning.gif";

const SliderData = [
  {
    image:
      "https://cdn.discordapp.com/attachments/1048691975437684746/1048980068854141039/1.png",
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/1048691975437684746/1048980069122588744/2.png",
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/1048691975437684746/1048980068673781821/3.png",
  },
  { image: Gif },
  {
    image: Gif2,
  },
];
const ImageSlider = ({}) => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const nextSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }
  console.log(current);

  return (
    <section className="slider">
      <div className="wrapper">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide-active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.image} alt="slider" />}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ImageSlider;
