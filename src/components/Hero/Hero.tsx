// import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
const Hero = () => {

  const transition = {type: 'spring', duration: 3};
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id='Home'>
      <div className="myBlur hero-blur"></div>
      <div className="left-h">
        <Header/>

        {/* The best add bar */}
        <div className="the-best-ad-bar">
          <motion.div
            initial={{left: mobile ? "160px": "238px"}}
            whileInView={{left: "8px"}}
            transition={{...transition, type: "tween"}}
          >
          </motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal </span>
            <span>body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body 
              and live up to your life to the fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span><CountUp end={140} start={100} duration={4} prefix='+'></CountUp></span>
            <span>expert coaches</span>
          </div>
          <div>
            <span><CountUp end={978} start={800} duration={4} prefix='+'></CountUp></span>
            <span>members joined</span>
          </div>
          <div> 
            <span><CountUp end={50} start={0} duration={4} prefix='+'></CountUp></span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* Hero Buttons */}
        <div className="hero-button">
          <div className="btn">Get Started</div>
          <div className="btn">Learn More</div>
        </div>
      </div>

      <div className="right-h">
        <button className='btn'>Join Now</button>

        <motion.div 
        initial={{right: "-1rem"}}
        whileInView={{right: "4rem"}}
        transition={transition}
        className='heart-rate'>
          <img src={heart} alt="" />
          <span>Heart Rate</span><span> 116 bpm</span>
        </motion.div>

        {/* Hero Images */}
        <img src={hero_image} alt="hero_image" className="hero-image" />
        <motion.img
        initial={{right: "11rem"}}
        whileInView={{right: "20rem"}}
        transition={transition}
        src={hero_image_back} alt="hero_image_back" className="hero-image-back" />
      
        {/* Calories */}
        <motion.div 
        initial={{right: "38rem"}}
        whileInView={{right: "28rem"}}
        transition={transition}
        className="calories">
          <img src={calories} alt="calories" className='calories-img' />
          <div>
            <span>Calories Burned</span>
            <span> 220 kcal</span>
          </div>
        </motion.div>
      </div>

    </div>
  )
}

export default Hero
