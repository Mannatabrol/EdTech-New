import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const Community = () => {
	const tabs = [
		{
			name: "WhatsApp",
			icon: <FaWhatsapp />,
			link: "https://wa.me/your-number",
			info: "Join our WhatsApp group to stay updated with the latest news, events, and discussions. Connect with fellow members and share your thoughts instantly.",
		},
		{
			name: "GitHub",
			icon: <FaGithub />,
			link: "https://github.com/your-profile",
			info: "Explore our GitHub repository to access our open-source projects. Contribute to the codebase, raise issues, and collaborate with other developers.",
		},
		{
			name: "LinkedIn",
			icon: <FaLinkedin />,
			link: "https://linkedin.com/in/your-profile",
			info: "Follow our LinkedIn page for professional updates, networking opportunities, and industry insights. Connect with team members and expand your professional network.",
		},
	];

	return (
		<div className='flex flex-col items-center p-4 min-h-screen bg-gray-100'>
			<div className='flex space-x-20 mt-auto mb-auto h-full w-full justify-center'>
				{tabs.map((tab) => (
					<div
						key={tab.name}
						className='flex flex-col justify-center text-justify items-center w-1/3 min-h-3/4 px-4 py-4 border rounded-lg bg-white text-gray-700 transition-colors'>
						<div className='flex justify-center items-center space-x-2 px-4 py-2 font-bold text-xl'>
							{tab.icon}
							<span>{tab.name}</span>
						</div>
						<span>{tab.info}</span>
						<a
							href={tab.link}
							target='_blank'
							rel='noopener noreferrer'
							className='mt-5 inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors'>
							Join Now
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Community;
