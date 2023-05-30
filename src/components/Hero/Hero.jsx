import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>
            {/* Le meilleur club  */}
            <div className="the-best-ad">
                <div></div>
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
                <span>+140</span>
                <span>coach expert</span>
              </div>
              <div>
                <span>+1000</span>
                <span>membres</span>
              </div>
              <div>
                <span>+50</span>
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

          <div className="heart-rate">
            <img src={Heart} />
            <span>Rythme cardiaque </span>
            <span>116 bpm</span>
          </div>

          {/* hero images  */}
          <img src={hero_image} className="hero-image" />
          <img src={hero_image_back} className="hero-image-back" />

          {/* calories  */}
          <div className="calories">
            <img src={Calories}/>
            <div>
              <span>Calories Brulées</span>
              <span>220 kcal</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero;
