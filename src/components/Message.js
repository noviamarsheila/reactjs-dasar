import { useState } from "react";

export const Message = () => {
	const [message, setMessage] = useState("Welcome visitors");

	return (
		<div>
			<h1>{message}</h1>
			<button onClick={() => setMessage("Thank you for subscribing")}>Subscribe</button>
		</div>
	);
};
