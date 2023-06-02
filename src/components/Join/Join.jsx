import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lv9a1uf', 'template_ncjlvre', form.current, 'jW62ZWYar1V_qL675')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })
  }
  return (
    <div className="Join" id='join-us'>
        <div className='left-j'>
            <hr />
            <div>
                <span className='stroke-text'>PRÊT À</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>VOTRE ENTRAINEMENT</span>
                <span className='stroke-text'>AVEC NOUS ?</span>
            </div>
        </div>
        <div className='right-j'>
          <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name='user_email' placeholder='Entrez votre email'/>
            <button className="btn btn-j">Rejoindre Maintenant</button>
          </form>
        </div>
    </div>
  )
}

export default Join
