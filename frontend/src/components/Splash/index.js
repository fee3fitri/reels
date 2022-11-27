import React from 'react';
import Hero from './Hero';
import Category from './Category';
import Video from './Video';
import Pitch from './Pitch';
import Footer from '../Footer';
import './Splash.css'

const Splash = () => {
  return (
    <section className="page_wrapper">
      <Hero />
      <Category />
      <Video />
      <Pitch />
      <Footer />
    </section>
  )
}

export default Splash;