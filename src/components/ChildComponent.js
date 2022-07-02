export const ChildComponent = (props) => {
	return (
		<div>
			<button onClick={() => props.greetHandler("Sheila")}>Greet Parent</button>
		</div>
	);
};
