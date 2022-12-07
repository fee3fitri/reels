import React, {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import "./Splash.css"

const Video = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        <p>
          Your browser does not support HTML5 video. Here is the link to the video instead:
          <br />
          MP4: https://cdn.shopify.com/videos/c/o/v/c64935b2e92546cbacdd13170c55b6b3.mp4
        </p>
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  
  return (
    <section className="splash_video grid">
        <div className="text_content flex-col">
          <p>MEET THE ENEMIES OF GRAVITY</p>
          <h2>A color for every foot<i className="fa-regular fa-circle"></i></h2>
          <div className="grid">
            <div className="empty_container"></div>
            <Link 
              to="products/9"
              className="text_image_content">
              <p>Our community makes us unique. They have an energy that reverberates around them. Their mission in life is to ensure the wonder in the world is not overlooked.</p>
              <picture className="flex-row align-center justify-center">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0146/8461/8806/files/SC01315_Derby_Brogue_Rise_Bold_Geo_H_414x.png?v=1666150631"
                  alt="featured_shoes" 
                  />
              </picture>
            </Link>
          </div>
        </div>

        <div className="promotional_video">
          <video 
            muted 
            loop 
            playsInline
            alt="video promotion"
            src="https://cdn.shopify.com/videos/c/o/v/c64935b2e92546cbacdd13170c55b6b3.mp4" 
            type="video/mp4"
            ref={videoEl}>
          </video>
        </div>
      </section>
  )
}

export default Video;