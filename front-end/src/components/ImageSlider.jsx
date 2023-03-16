import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../Styles/ImageSlider.css";
import Gif from "../images/elearning.gif";
import Gif2 from "../images/online-learning.gif";
import Gif3 from "../images/donate-gif.gif";
import Gif4 from "../images/forum.gif";
import Gif5 from "../images/leaderboard.gif";

const delay = 4500;


const SliderData = [
  {
    image:
      "https://cdn.discordapp.com/attachments/1048691975437684746/1048980068854141039/1.png",
    text:"learn programming easily"
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/1048691975437684746/1048980069122588744/2.png",
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/1048691975437684746/1048980068673781821/3.png",
    Text: "test",
  },
  { image: Gif },
  {
    image: Gif2,
  },
  {
    image: Gif3,
  },
  {
    image: Gif4,
  },
  {
    image: Gif5,
  },
];
const ImageSlider = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="imgSlider">
      <div
        className="imgshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {SliderData.map((item, index) => (
          <div
            className="slide"
            key={index}
           
          >  <img src={item.image} alt="slider" /><p className="sliderText">{item.text}</p></div>
        ))}
      </div>

      <div className="slideButtons">
        {SliderData.map((_, idx) => (
          <div
            key={idx}
            className={`sileShowButton${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
