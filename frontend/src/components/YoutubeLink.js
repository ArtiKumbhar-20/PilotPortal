import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
const VIDEO_PATH = 'https://youtube.com/shorts/9Md_gvqj018?si=IFmOKVHTEeO5eKoY';
function YoutubeLink() {
   const playerRef = useRef(null);
   return (
      <div className='container'>
        <div className='row'>
            <div className='section-title-center section-head text-left'>
                <h1 className='title'>Witness Our Journey So Far...</h1>
                <div className='row'>
                    <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
                    <hr />
                </div>
            </div>
        </div>
      </div>
   )
};
export default YoutubeLink;