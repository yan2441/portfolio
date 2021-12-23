import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
	const logo = process.env.PUBLIC_URL + '/about.svg'
	const form = useRef();

	const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
	const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
	const USER_ID = process.env.REACT_APP_USER_ID

	const handleSubmit = async (e) => {
		e.preventDefault();
		//const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
		//console.log(res)
		e.target.reset();
	}

	return (
		<div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-coolGray-800 dark:text-coolGray-100">
			<div className="flex flex-col justify-between">
				<div className="space-y-2">
					<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's work!</h2>
					<div className="dark:text-coolGray-400">Send me an E-mail</div>
				</div>
				<img src={logo} alt="Contact" className="p-6 h-52 md:h-64"></img>
			</div>
			<form ref={form} className="space-y-6" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name" className="text-sm">Full name</label>
					<input id="name" type="text" name="name" placeholder="Your Full Name" className="w-full p-3 bg-gray-200 border-gray-400 rounded dark:bg-coolGray-800"></input>
				</div>
				<div>
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" type="email" name="email" placeholder="Your Email" className="w-full p-3 bg-gray-200 border-gray-400 rounded dark:bg-coolGray-800"></input>
				</div>
				<div>
					<label htmlFor="message" className="text-sm">Message</label>
					<textarea id="message" name="message" placeholder="Your Message" rows="3" className="w-full p-3 bg-gray-200 border-gray-400 rounded dark:bg-coolGray-800"></textarea>
				</div>
				<input type="submit" value="Send Massage" className="w-full p-3 text-sm font-bold tracking-wide uppercase bg-blue-600 border-black rounded"></input>
			</form>
		</div>
	);
}

export default Contact;