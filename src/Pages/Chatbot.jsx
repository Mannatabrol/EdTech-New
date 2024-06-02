import React, { useState } from "react";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbot = () => {
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState("");
	const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY);

	const sendMessage = async (msg) => {
		// console.log(messages);
		const userMessage = { role: "user", text: msg, parts: [] };
		setMessages((prevMessages) => [...prevMessages, userMessage]);

		try {
			const model = genAI.getGenerativeModel({ model: "gemini-pro" });
			const chat = model.startChat({
				history: [],
			});
			const result = await chat.sendMessage(msg);
			const response = await result.response;
			const reply = response.text();
			const botMessage = { role: "bot", text: reply };
			setMessages((prevMessages) => [...prevMessages, botMessage]);
		} catch (error) {
			console.error("Error sending message:", error);
			const botMessage = {
				role: "bot",
				text: "Sorry unable to understand your text",
			};
			setMessages((prevMessages) => [...prevMessages, botMessage]);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input.trim()) {
			sendMessage(input);
			setInput("");
		}
	};

	return (
		<div className='flex flex-col h-96 w-auto border border-gray-300 bg-white rounded-lg shadow-lg animate-slideUp'>
			<div className='flex-1 p-4 overflow-y-auto'>
				{messages.map((msg, index) => (
					<div
						key={index}
						className={`my-2 p-3 max-w-48 rounded-lg ${
							msg.role === "user"
								? "bg-blue-500 text-white self-end ml-auto"
								: "bg-slate-500 self-start"
						}`}>
						{msg.text}
					</div>
				))}
			</div>
			<form
				onSubmit={handleSubmit}
				className='flex p-4 border-t border-gray-300'>
				<input
					type='text'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder='Type a message...'
					className='flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'
				/>
				<button
					type='submit'
					className='ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>
					Send
				</button>
			</form>
		</div>
	);
};

export default Chatbot;
