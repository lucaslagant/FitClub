import React from 'react'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import './Plans.css'

const Plans = () => {
return (
<div className="plans-container">
    <div className="programs-header" style={{
            gap: '2rem'
        }}>
        <span className='stroke-text'>PRÊT À COMMENCER</span>
        <span>VOTRE JOURNÉE</span>
        <span className='stroke-text'>MAINTENANT AVEC NOUS</span>
    </div>

    {/* plans card */}
    <div className="plans">
        {plansData.map((plan, i) => (
        <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price}</span>

            <div className="features">
                {plan.features.map((feature, i) => (
                <div className="feature">
                    <img src={whiteTick} alt="" />
                    <span key={i}>{feature}</span>
                </div>
                ))}
            </div>
            <div>
                <span>Voir les autres avantages -></span>
            </div>
            <button className="btn">Rejoindre Maintenant</button>
        </div>
        ))}
    </div>
</div>
)
}

export default Plans