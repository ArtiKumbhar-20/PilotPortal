import ReactPlayer from "react-player/youtube";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Your video paths
const VIDEO_PATH_1 = "https://youtube.com/shorts/9Md_gvqj018?si=IFmOKVHTEeO5eKoY";
const VIDEO_PATH_2 = "https://youtu.be/iF8yFg2_0ko?si=d7yZ5tq10qPTFjDj";

function YoutubeLink() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const playerRef1 = useRef(null);
  const playerRef2 = useRef(null);

  return (
    <div className='container'>
      <div className='row'>
        <div
          className='col-12 wow fadeIn'
          data-wow-duration='.7s'
          data-wow-delay='.1s'
        >
          <div className='section-title-center section-head text-left mb-4'>
            <span className='subtitle'>Our Story</span>
            <h2 className='title'>Understand Our Journey So Far..</h2>
          </div>
        </div>
      </div>
      <div className='row pb-5'>
        <div className='col-12'>
          <Slider {...sliderSettings} className="youtube-slider">
            <div style={{ padding: "5px" }}>
              <ReactPlayer
                ref={playerRef1}
                url={VIDEO_PATH_1}
                controls={true}
                width='100%'
              />
            </div>
            <div style={{ padding: "5px" }}>
              <ReactPlayer
                ref={playerRef2}
                url={VIDEO_PATH_2}
                controls={true}
                width='100%'
              />
            </div>
            <div style={{ padding: "5px" }}>
              <ReactPlayer
                ref={playerRef1}
                url={VIDEO_PATH_1}
                controls={true}
                width='100%'
              />
            </div>
            <div style={{ padding: "5px" }}>
              <ReactPlayer
                ref={playerRef2}
                url={VIDEO_PATH_2}
                controls={true}
                width='100%'
              />
            </div>
            <div style={{ padding: "5px" }}>
              <ReactPlayer
                ref={playerRef1}
                url={VIDEO_PATH_1}
                controls={true}
                width='100%'
              />
            </div>
            <div style={{ padding: "5px" }}>
              <ReactPlayer
                ref={playerRef2}
                url={VIDEO_PATH_2}
                controls={true}
                width='100%'
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default YoutubeLink;
