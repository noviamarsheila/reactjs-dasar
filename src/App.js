import "./App.css";
// import USERS from "./components/data.json";
// import { Greet } from "./components/Greet";
// import { Message } from "./components/Message";
// import { ClickHandler } from "./components/ClickHandler";
// import { ParentComponent } from "./components/ParentComponent";
// import { UserGreeting } from "./components/UserGreeting";
// import { NameList } from "./components/NameList";
// import { Stylesheet } from "./components/Stylesheets";
// import { Inline } from "./components/Inline";
// import "./appStyles.css";
// import styles from "./appStyles.module.css";
// import { Form } from "./components/Form";
// import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";

function App() {
	return (
		<div className="App">
			{/* {<Greet name="Sheila" age="18" />
			<Greet name="Rival" age="15">
				<button>Klik</button>
			</Greet>
			<Greet name="Berlian" age="11">
				<p>This is paragraf</p>
			</Greet>} */}
			{/* <Message /> */}
			{/* <ClickHandler /> */}
			{/* <ParentComponent /> */}
			{/* <UserGreeting /> */}
			{/* <NameList /> */}
			{/* <Stylesheet /> */}
			{/* <Inline>
				<h1 className="error">Error</h1>
				<h1 className={styles.succes}>Succes</h1>
			</Inline> */}
			{/* <Form /> */}
			{/* <PostList /> */}
			<PostForm />
			{/* {USERS.map((user) => {
				<p key={user.id}>
					{user.id} {user.title}
				</p>;
				console.log(user.id);
			})} */}
		</div>
	);
}

export default App;
