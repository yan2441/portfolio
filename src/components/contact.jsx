import React from 'react';

const Contact = () => {
	const logo = process.env.PUBLIC_URL + '/about.svg'
	return (
		<div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-coolGray-800 dark:text-coolGray-100">
			<div className="flex flex-col justify-between">
				<div className="space-y-2">
					<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's work!</h2>
					<div className="dark:text-coolGray-400">Send me an E-mail</div>
				</div>
				<img src={logo} alt="Contact" className="p-6 h-52 md:h-64"></img>
			</div>
			<form className="space-y-6">
				<div>
					<label for="name" className="text-sm">Full name</label>
					<input id="name" type="text" placeholder="" className="w-full p-3 bg-gray-200 border-gray-400 rounded dark:bg-coolGray-800"></input>
				</div>
				<div>
					<label for="email" className="text-sm">Email</label>
					<input id="email" type="email" className="w-full p-3 bg-gray-200 border-gray-400 rounded dark:bg-coolGray-800"></input>
				</div>
				<div>
					<label for="message" className="text-sm">Message</label>
					<textarea id="message" rows="3" className="w-full p-3 bg-gray-200 border-gray-400 rounded dark:bg-coolGray-800"></textarea>
				</div>
				<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase bg-blue-600 border-black rounded dark:bg-indigo-400 dark:text-coolGray-900">Send Message</button>
			</form>
		</div>
	);
}

export default Contact;