import Marquee from "../Marquee/Marquee";
import "./Splash.css";

const Hero = () => {
  return (
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
    <Marquee />
  </section>
  )
  
}

export default Hero;