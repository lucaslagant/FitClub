import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'
const Hero = () => {
  const transition = {type: 'spring', duration : 3};
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
            {/* Le meilleur club  */}
            <div className="the-best-ad">
                <motion.div
                  initial={{left: mobile? "110px": '150px'}}
                  whileInView={{left: '8px'}}
                  transition={{...transition, type: 'tween'}}
                >
                </motion.div>
                <span>Le meilleur club de sport</span>
            </div>

            {/* Slogan  */}
            <div className="hero-text">
              <div>
                <span className='stroke-text'>Taille </span>
                <span>ton</span>
              </div>
              <div>
                <span>Corps de rêve</span>
              </div>
              <div>
                <span>
                  Nos coach sont formés pour vous aidez à construire votre corps de rêve
                </span>
              </div>
            </div>

            {/* stat  */}
            <div className="stat">
              <div>
                <span>
                  <NumberCounter end={140} start={100} delay='4' preFix="+"/>
                </span>
                <span>coach expert</span>
              </div>
              <div>
                <span>
                <NumberCounter end={1000} start={840} delay='4' preFix="+"/>
                </span>
                <span>membres</span>
              </div>
              <div>
                <span>
                <NumberCounter end={50} start={30} delay='4' preFix="+"/>
                </span>
                <span>programmes fitness</span>
              </div>
            </div>

            {/* Button Hero  */}
            <div className="hero-buttons">
              <buttons className="btn">Commencez</buttons>
              <buttons className="btn">En savoir plus</buttons>
            </div>

        </div>
        <div className="right-h">
          <button className="btn">Rejoignez-nous</button>

          <motion.div
            initial={{ right: "-1rem"}}
            whileInView={{ right: "4rem" }}
            transition={transition}
            className="heart-rate">
            <img src={Heart} />
            <span>Rythme cardiaque </span>
            <span>116 bpm</span>
          </motion.div>

          {/* hero images  */}
          <img src={hero_image} className="hero-image" />
          <motion.img
          initial={{ right: "11rem"}}
          whileInView={{ right: "30rem" }}
          transition={transition}          
          src={hero_image_back} className="hero-image-back" />

          {/* calories  */}
          <motion.div 
            initial={{ right: "65rem"}}
            whileInView={{ right: "50rem" }}
            transition={transition}
            className="calories">
            <img src={Calories}/>
            <div>
              <span>Calories Brulées</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Hero;
