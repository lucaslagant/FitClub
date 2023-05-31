import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from "../../assets/tick.png";

const Reasons = () => {
return (
<div className="Reasons" id='reasons'>
    <div className="left-r">
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
    </div>
    <div className="right-r">
        <span>Quelques raisons</span>
        <div>
            <span className='stroke-text'>Pourquoi </span>
            <span>nous choisir ?</span>
        </div>
        <div className='details-r'>
            <div>
                <img src={tick} />
                <span>+140 COACH EXPERT</span>
            </div>
            <div>
                <img src={tick} />
                <span>ENTRAÎNEZ-VOUS PLUS INTELLIGEMMENT ET PLUS RAPIDEMENT QU'AVANT</span>
            </div>
            <div>
                <img src={tick} />
                <span>PROGRAMME GRATUIT POUR LES NOUVEAUX MEMBRES</span>
            </div>
            <div>
                <img src={tick} />
                <span>DES PARTENAIRES FIABLES</span>
            </div>
        </div>
        <span style={{
                color: "var(--gray)",
                fontWeight: "normal",
            }}
        >
            NOS PARTENAIRES
        </span>
        <div className="partners">
            <img src={nb} />
            <img src={adidas} />
            <img src={nike} />
        </div>
    </div>
</div>
)
}

export default Reasons