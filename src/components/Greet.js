// const Greet = () => {
// 	return <h1>Hello Sheila</h1>;
// };

// export default Greet;

// function Greet() {
// 	return <h1>Hello Sheila</h1>;
// }

// export default Greet;

export const Greet = (props) => {
	return (
		<div>
			<h1 className="Sheila">
				Hello {props.name} umur {props.age} tahun
			</h1>
			{props.children}
		</div>
	);
};
