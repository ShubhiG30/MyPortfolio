import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './style.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaTelegram } from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs'

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(
			'service_qubxo3q',
			'template_8ft8h64',
			form.current,
			'zXGJ7QLbpqipuiHpR'
		);
		e.target.reset();
	};

	return (
		<section id='contact'>
			<h5>Get in Touch</h5>
			<h2>Contact Me</h2>
			<div className='container contact__container'>
				<div className='contact__options'>
					{/* END OF CONTACT OPTIONS */}
					<article className='contact__option'>
						<MdOutlineEmail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>shubhi30003@gmail.com</h5>
						<a
							href='mailto:shubhi30003@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							Send a message
						</a>
					</article>
					<article className='contact__option'>
						<FaTelegram className='contact__option-icon' />
						<h4>Telegram</h4>
						<h5>@Selenator_VS30</h5>
						<a
							href='https://telegram.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							Send a message
						</a>
					</article>
					<article className='contact__option'>
						<BsLinkedin className='contact__option-icon' />
						<h4>LinkedIn</h4>
						<h5>Shubhi Gupta</h5>
						<a
							href='https://www.linkedin.com/in/shubhi-gupta-857568229/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Send a message
						</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						required
					/>
					<input
						type='text'
						name='subject'
						placeholder='The subject of your email'
					/>
					<input type='email' name='email' placeholder='Your Email' required />
					<textarea
						name='message'
						rows='3'
						placeholder='Your message'
						required
					></textarea>
					<button type='submit' className='btn btn-primary'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;