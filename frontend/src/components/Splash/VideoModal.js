import React, { useState, useEffect, useRef } from 'react';
import './Splash.css';

const VideoModal = ({ setShowModal }) => {
  const videoEl = useRef(null);
  const [hideVideo] = useState(false);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        <p>
          Your browser does not support HTML5 video. Here is the link to the video instead:
          <br />
          MP4: https://cdn.shopify.com/videos/c/o/v/f1a614d1eeea4d359d47f5ae00889e0c.mp4
        </p>
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className={`video_modal flex-col align-end ${hideVideo ? 'hide-modal' : ''}`}>
      <i className="fa-solid fa-xmark"
          onClick={() => setShowModal(false)}></i>
      <video
            muted 
            loop 
            controls
            playsInline
            alt="video pitch"
            src="https://cdn.shopify.com/videos/c/o/v/f1a614d1eeea4d359d47f5ae00889e0c.mp4" 
            type="video/mp4"
            ref={videoEl}
            className="flex-row">
          </video>
    </div>
  )
}

export default VideoModal;