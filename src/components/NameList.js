export const NameList = () => {
	const names = ["Sheila", "Berlian", "Rival"];
	return (
		<div>
			{names.map((name) => {
				return <h2 key={name}>{name}</h2>;
			})}
		</div>
	);
};
