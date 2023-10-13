// import ReactPlayer from "react-player";
import ReactPlayer from "react-player/youtube";
import React, { useRef } from "react";

const VIDEO_PATH_1 =
  "https://youtube.com/shorts/9Md_gvqj018?si=IFmOKVHTEeO5eKoY"; // Replace with your YouTube video URL
const VIDEO_PATH_2 =
  "https://youtube.com/shorts/9Md_gvqj018?si=IFmOKVHTEeO5eKoY";

function YoutubeLink() {
  const playerRef1 = React.useRef(null);
  const playerRef2 = React.useRef(null);
  return (
    // <div className='container'>
    //   <div className='row'>
    //     <div className='section-title-center section-head text-left'>
    //       <h1 className='title pb-3'>Witness Our Journey So Far...</h1>
    //       <div className='row'>
    //         <div className='col-3'>
    //           <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
    //         </div>
    //         <hr />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='container'>
      <div className='row'>
        <div
          className='col-12 wow fadeIn'
          data-wow-duration='.7s'
          data-wow-delay='.1s'
        >
          <div className='section-title-center section-head text-left mb-4'>
            <span className='subtitle'>Our Story</span>
            <h2 className='title'>Witness Our Journey So Far..</h2>
          </div>
        </div>
      </div>
      <div className='row pb-5'>
        <div className='col-sm-12 col-md-6' style={{ padding: "5px" }}>
          <ReactPlayer
            ref={playerRef1}
            url={VIDEO_PATH_1}
            controls={true}
            width='100%'
            // height='100%'
          />
        </div>
        <div className='col-sm-12 col-md-6' style={{ padding: "5px" }}>
          <ReactPlayer
            ref={playerRef2}
            url={VIDEO_PATH_2}
            controls={true}
            width='100%'
            // height='100%'
          />
        </div>
      </div>
    </div>
  );
}
export default YoutubeLink;
