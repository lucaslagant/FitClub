import React from 'react';
import './Programs.css';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/* Header programme  */}
        <div className="programs-header">
            <span className='stroke-text'>Découvrez nos</span>
            <span>Programmes</span>
            <span className='stroke-text'>Pour te façonner</span>
        </div>
        <div className="programs-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Rejoindre maintenant</span>
                        <img src={RightArrow}/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs
