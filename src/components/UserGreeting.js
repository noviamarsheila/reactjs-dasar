// export const UserGreeting = () => {
// 	const isLoggedIn = true;
// 	return <div>Welcome {isLoggedIn ? "Sheila" : "Guest"}</div>;
// };

export const UserGreeting = () => {
	const isLoggedIn = false;
	return <div>Welcome {isLoggedIn && "Sheila"}</div>;
};
