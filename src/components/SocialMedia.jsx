import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub  } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
	<a href="https://hh.kz/resume/7a8260d6ff0c0e53120039ed1f7a726d76504f" target="_blank" rel="noreferrer">
		<div>
			<p>hh</p>
		</div>
	</a>
	<a href="https://github.com/Proger30" target="_blank" rel="noreferrer">
		<div>
			<FaGithub />
		</div>
	</a>
	<a href="https://www.instagram.com/s.u.1.t.a.n/" target="_blank" rel="noreferrer">
		<div>
			<BsInstagram />
	    </div>
	</a>
  </div>
);

export default SocialMedia;
