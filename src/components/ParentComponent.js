import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {
	const greetParent = (childname) => {
		alert(`Hallo Parent ${childname}`);
	};
	return <ChildComponent greetHandler={greetParent} />;
};
