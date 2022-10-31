import React from 'react';
import {Link} from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import './Splash.css'

function Splash() {

  return (
    <section className="splash_wrapper">

      {/* Hero Section */}
      <section className="hero grid">
        <div className="hero_text-wrapper flex-col align-center justify-center">
          <div className="hero_text">
            <p className="hero_p">THE WEEKENDER</p>
            <h1>The future of comfort<i className="fa-regular fa-circle"></i></h1>
            <p>Like helium for your feet.</p>
          </div>
        </div>
        <div className="hero_img">
          <img 
            src="https://cdn.shopify.com/s/files/1/0146/8461/8806/files/weekender_v2_copiar_62c06a9b-7795-4115-8ee0-08b1239e6a46_950x.png"
            alt="hero_shoes" 
          />
        </div>

        {/* <div className="hero_marquee">
          <p className="marquee_text_1">
            Enemies of Gravity<i className="fa-regular fa-circle"></i>
          </p>
          <p className="marquee_text_2">
            Enemies of Gravity<i className="fa-regular fa-circle"></i> 
          </p>
        </div> */}
      </section>

      {/* Category Section */}
      <section className="splash_category">
        <div className="text_content flex-row justify-between align-center">
          <p className="free">We are free</p>
          <p>For us, comfort isn&#39;t rocket science -<br />it&#39;s standard.</p>
        </div>
        <div className="category_images flex-row justify-around">
          <Link to={{ pathname: "#" }}>
            <picture>
              <img
                src="https://cdn.shopify.com/s/files/1/0146/8461/8806/files/Womens_286c03b1-41b1-415c-8215-6d5e8834131f_845x.jpg?v=1657253925"
                alt="women_category_pic"
                />
              <button className="btn">Women</button>
            </picture>
          </Link>
          <Link to={{ pathname: "#" }}>
            <picture className="flex-row justify-center">
              <img 
                src="https://cdn.shopify.com/s/files/1/0146/8461/8806/files/Men_78afae33-0da4-4908-910b-d6177235d722_425x.jpg?v=1655780752"
                alt="men_category_pic" />
              <button className="btn">Men</button>
            </picture>
          </Link>
        </div>
      </section>

      {/* Video Section */}
      <section className="splash_video grid">
        <div className="text_content flex-col">
          <p>MEET THE ENEMIES OF GRAVITY</p>
          <h2>A color for every foot<i className="fa-regular fa-circle"></i></h2>
          <div className="grid">
            <div className="empty_container"></div>
            <Link 
              to={{ pathname: "#" }}
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
          <video controls autoplay muted loop playsinline>
            <source 
              src="https://cdn.shopify.com/videos/c/o/v/c64935b2e92546cbacdd13170c55b6b3.mp4" type="video/mp4"
            />
            <p>
              Your browser does not support HTML5 video. Here is the link to the video instead:
              <br />
              MP4: https://cdn.shopify.com/videos/c/o/v/c64935b2e92546cbacdd13170c55b6b3.mp4
            </p>
          </video>
          <div className=""></div>
        </div>
      </section>

      {/* Pitch Section */}
    </section>
  )
}

export default Splash;