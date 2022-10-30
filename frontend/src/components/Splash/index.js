import React from 'react';
import Marquee from 'react-fast-marquee';
import './Splash.css'

function Splash() {
  let marqueeText;

  return (
    <section className="splash_wrapper">
      <section className="hero grid">
        <div className="hero_text-wrapper flex-col align-center justify-center">
          <div className="hero_text">
            <p className="hero_p">THE WEEKENDER</p>
            <h1>The future of comfort<i className="fa-regular fa-circle"></i></h1>
            <p>Like helium for your feet.</p>
          </div>
        </div>
        <div className="hero_img">
          <img src="https://cdn.shopify.com/s/files/1/0146/8461/8806/files/weekender_v2_copiar_62c06a9b-7795-4115-8ee0-08b1239e6a46_950x.png" />
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
    </section>
  )
}

export default Splash;