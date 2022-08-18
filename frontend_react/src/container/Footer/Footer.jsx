import React from 'react'

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  //special state, to find out whether to show form or success message
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  //if loading, show loading message
  const [loading, setLoading] = useState(false);

  //process of destructuring, pooling values outside of formData object
  const {name, email, message} = formData;
  //accepts keypress event
  const handleChangeInput = (e) => {
      //get name and value input
      const { name, value } = e.target;

      //set form data with name, value dynamically by (...) destructuring current values
      setFormData({...formData, [name]: value });
  }

  //handleSubmit function

  const handleSubmit = () => {
      //while submitting, setLoading(true)
      setLoading(true);

      //contact object
      const contact = {
          //sanity guidelines
          _type: 'contact',
          name: name,
          email: email,
          message: message,
      }

      client.create(contact)
        .then(() => {
            //if successful setLoading(false)
            setLoading(false);
            setIsFormSubmitted(true);
        })
  }
  
    return (
      <>
        <h2 className="head-text">Let's grab a coffee</h2>
        <div className="app__footer-cards">
          <div className="app__footer-card">
              <img src={images.email} alt="email" />
              {/* mailto -> redirect to email entered, tel -> telephone */}
              <a href="mailto:jacobssibi@gmail.com" className="p-text">jacobssibi@gmail.com</a>
          </div>
          <div className="app__footer-card">
              <img src={images.mobile} alt="mobile" />
              {/* mailto -> redirect to email entered, tel -> telephone */}
              <a href="tel: +64 (022) 590-4210" className="p-text">+64 (022) 590-4210</a>
          </div>
        </div>

        
        {/* Form */}
        {/* If form is not submitted */}
        {!isFormSubmitted ? 
        <div className="app__footer-form app__flex">
            <div className="app__flex">
                <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
            </div>
            <div className="app__flex">
                <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
            </div>
            <div>
                {/* Our message */}
              <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name={message}
              onChange={handleChangeInput}
              />
            </div>
            {/* Send Message Button, dynamically check if loading*/} 
            <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div>
        //Else if form is submitted
        : <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
        </div> }
      </>
    )
}


export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
)
