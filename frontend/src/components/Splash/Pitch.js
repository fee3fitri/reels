import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Modal } from '../../context/Modal';
import VideoModal from './VideoModal';
import "./Splash.css"

const Pitch = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="splash_pitch flex-row">
        <div className="pic_content flex-col">
          <div className="pic_container">
            <img src="https://cdn.shopify.com/s/files/1/0146/8461/8806/files/highlight-1_232x.jpg?v=1657255470" 
              alt="man_weekender" />
          </div>
          <div className="pic_container">
            <img src="https://cdn.shopify.com/s/files/1/0146/8461/8806/files/highlight-2_146x.jpg?v=1657255524" 
              alt="woman_weekender" />
          </div>
          <div className="pic_container">
            <img src="https://cdn.shopify.com/s/files/1/0146/8461/8806/files/highlight-3_300x.jpg?v=1657255603" 
              alt="man_white_weekender" />
          </div>
          <div className="pic_container">
            <img src="https://cdn.shopify.com/s/files/1/0146/8461/8806/files/highlight-4_200x.jpg?v=1657255897" 
              alt="woman_white_weekender" />
          </div>
        </div>
        <div className="text_content">
          <p>
            Your feet work hard and deserve the very best.
            It&#39;s why we make shoes that take the pressure off.
          </p>
          <p>
            We&#39;re Rollie Nation, enemies of gravity and innovators of comfort. 
            We believe that looking good and feeling good aren’t mutually exclusive so we reimagined the everyday shoe.
          </p>
          <div className="button_section flex-row">
            <button 
              className="btn flex-row"
              onClick={() => setShowModal(true)}>
              <i className="fa-solid fa-play"></i>
              Watch film
            </button>
            <Link to={{ pathname: "https://www.rollienation.com/pages/about-us" }} target="_blank">
              <button className="btn">Our story</button>
            </Link>
          </div>
        </div>
      </section>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <VideoModal setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default Pitch;