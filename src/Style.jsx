/** @format */

import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";

function Style() {
	const [data, setData] = useState([]);
	const [item, setItem] = useState([]);
	const [name, setName] = useState("");

	const loadDoc = (name) => {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				// console.log(this.response);
				let response = this.response;
				setItem(JSON.parse(response));
				// ()
			}
		};
		xhttp.open(
			"GET",
			`https://jsonplaceholder.typicode.com/comments?postId=${name}`,
			true,
		);
		xhttp.setRequestHeader("Content-type", "application/json");
		xhttp.send();
	};
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts`, {
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((result) => setData(result))
			.catch((err) => console.log(err));
		loadDoc(name);
	}, [data, name]);
	return (
		<>
			<div>
				{data.map((item) => {
					return <p>{item.title}</p>;
				})}
			</div>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<Button
				onClick={() => {
					loadDoc(name);
				}}>
				dsd
			</Button>
			{item.map((item) => {
				return <h2>{item.name}</h2>;
			})}
		</>
	);
}

export default Style;
