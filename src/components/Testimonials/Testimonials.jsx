import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLenght = testimonialsData.length;
    return (
        <div className="Testimonials">
            <div className="left-t">
                <span>Témoignages</span>
                <span className='stroke-text'>Ce qu'ils</span>
                <span>disent de nous</span>
                <span>
                    {testimonialsData[0].review}
                </span>
                <span>
                    <span style={{color: 'var(--orange)'}}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t"></div>
        </div>
    )
}

export default Testimonials
