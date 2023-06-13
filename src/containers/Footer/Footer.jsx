import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
	  	
		
	  <a href="mailto:f8b4i2@gmail.com" className="p-text">
			<div className="app__footer-card email-card">
			<img src={images.email} alt="email" />
			f8b4i2@gmail.com
			</div>
		</a>
        <a href="mailto:sultanbyzholdbay@outlook.com" className="p-text">
			<div className="app__footer-card email-card">
          	<img src={images.email} alt="email" />
			sultanbyzholdbay@outlook.com
        	</div>
		</a>

		<a href="https://hh.kz/resume/7a8260d6ff0c0e53120039ed1f7a726d76504f" className="p-text" target="_blank" rel="noreferrer">
			<div className="app__footer-card headhunter-card">
			<img src={images.headHunter} alt="email" />
			HeadHunter
			</div>
		</a>
		<a href="https://github.com/Proger30" className="p-text">
			<div className="app__footer-card github-card">
			<img src={images.github} alt="email" />
			GitHub
			</div>
		</a>	  	
        <a href="tel:+7 (708) 499-7639" className="p-text">
			<div className="app__footer-card phone-card">
			<img src={images.mobile} alt="phone" />
			+7 (708) 499-7639
			</div>
		</a>
		<a href="https://wa.me/77084997639" target="_blank" rel="noreferrer" className="p-text">
			<div className="app__footer-card whatsapp-card">
			<img src={images.whatsapp} alt="whatsapp" />
			+7 (708) 499-7639
			</div>
		</a>
		<a href="https://www.instagram.com/s.u.1.t.a.n/" target="_blank" rel="noreferrer" className="p-text">
			<div className="app__footer-card instagram-card">
			<img src={images.instagram} alt="telegram" />
			@s.u.1.t.a.n
			</div>
		</a>
		<a href="https://t.me/Sultanbii" target="_blank" rel="noreferrer" className="p-text">
			<div className="app__footer-card telegram-card">
			<img src={images.telegram} alt="telegram" />
			@Sultanbii
			</div>
		</a>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
