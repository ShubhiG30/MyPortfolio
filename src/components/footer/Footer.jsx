import React from 'react'
import './style.css' 
import { FaDiscord } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
// import {BsRedditAlien} from 'react-icons/bs';

const Footer = () => {
	return (
		<footer id='footer'>
			
			<ul className='permalinks'>
				<li>
					<a href='/'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#experience'>Experience</a>
				</li>
				<li>
					<a href='#portfolio'>Portfolio</a>
				</li>
				
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
			<div className='footer__socials'>
				<a
					href='https://discord.com/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaDiscord className='footer__socials-icon' />
				</a>
				<a
					href='https://instagram.com/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FiInstagram className='footer__socials-icon' />
				</a>
				<a
					href='https://twitter.com/ShubhiG45783644'
					target='_blank'
					rel='noopener noreferrer'
				>
					<IoLogoTwitter className='footer__socials-icon' />
				</a>
				{/* <a
					href='https://www.reddit.com/u/obssesshubhi_30?utm_source=share&utm_medium=android_app&utm_name=androidcss&utm_term=1&utm_content=share_button'
					target='_blank'
					rel='noopener noreferrer'
				>
					<BsRedditAlien className='footer__socials-icon' />
				</a> */}
			</div>
			<div className='footer__copyright'>
				<small>&copy;All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;