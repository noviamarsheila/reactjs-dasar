import { useState, useEffect } from "react";

export const PostList = () => {
	const [post, setPost] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => setPost(data))
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<ul>
				{post.map((post) => {
					return <li key={post.id}>{post.title}</li>;
				})}
			</ul>
		</div>
	);
};
