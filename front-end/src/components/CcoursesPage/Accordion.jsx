import { useState, useEffect } from "react";
import axios from "axios";

import ReactPlayer from "react-player";

const Accordion = () => {
  const jwt = sessionStorage.getItem("jwt");

  const [videoUrl, setVideoUrl] = useState("");

  const [category, setCategory] = useState([]);

  const course = 1;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/categories`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((resp) => {
        console.log(resp.data);

        setCategory(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log("cat" + JSON.stringify(category));

  const retrieveUrl = (videoName, courseID) => {
    const i = category.find(
      (video) =>
        video.videoName === videoName && video.course.courseID === courseID
    );
    const url = i.url;
  };

  const [showPlayer, setShowPlayer] = useState(false);

  function playVideo(url) {
    setVideoUrl(url);
    setShowPlayer(true);
  }

  const [activeIndex, setActiveIndex] = useState(null);
  const [rotate, setRotate] = useState(null);

  const colors = ["#a0acea", "#fe9687", "#ffe587"];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    setRotate(index === activeIndex ? "rotate(0)" : "rotate(180deg)");
  };

  console.log(videoUrl);

  return (
    <div>
      {showPlayer && (
        <div className="video-player-popup">
          <button className="closeIcon" onClick={() => setShowPlayer(false)}>
            <i class="fa-sharp fa-solid fa-xmark fa-2x" size={"10px"}></i>
          </button>
          <ReactPlayer
            className="videoPlayer"
            url={videoUrl}
            controls={true}
            width="120%"
            height="100%"
          />
        </div>
      )}

      <div className="sidenava" style={{ position: "relative", zIndex: 2 }}>
        {category.map((item, index) => (
          <>
            <div
              className="dropdown-btn"
              key={index}
              style={{ backgroundColor: colors[index] }}
              onClick={() => handleClick(index)}
            >
              <span className="line-2"></span>
              <span className="line-1">{item.categoryName}</span>
              <i className="fa fa-caret-down"></i>
            </div>
            <div>
              {activeIndex === index && (
                <div className="dropdown-container">
                  {item.videos.map((link, i) => (
                    <a
                      href="#!"
                      key={i}
                      onClick={() => {
                        playVideo(link.url);
                      }}
                    >
                      {link.videoName}
                      <i className="fa-regular fa-circle-play"></i>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default Accordion;
