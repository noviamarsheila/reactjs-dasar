export const ClickHandler = () => {
	function clickHandler(event, count = 1) {
		console.log("btn click", count, event);
	}

	return (
		<div>
			<button onClick={clickHandler}>Click</button>
			<button onClick={(event) => clickHandler(event, 5)}>Klik 5 </button>
		</div>
	);
};
