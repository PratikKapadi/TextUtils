import React, { useState } from "react";

export default function TextFrom(props) {
	const handleUpclick = () => {
		let newtext = text.toUpperCase();
		setText(newtext);
	};
	const handleLoclick = () => {
		let newtext = text.toLowerCase();
		setText(newtext);
	};
	const handleOnChange = (event) => {
		setText(event.target.value);
	};
	const [text, setText] = useState('');
	return (
		<>
			<div className="container">
				<h1>{props.heading}</h1>
				<div className="mb-3">
					<textarea
						className="form-control"
						id="mybox"
						rows="8"
						onChange={handleOnChange}
						value={text}
					></textarea>
				</div>
				<button className="btn btn-primary mx-1" onClick={handleUpclick}>
					Convert to Uppercase
				</button>
				<button className="btn btn-primary mx-1" onClick={handleLoclick}>
					Convert to Uppercase
				</button>
			</div>
			<div className="container my-3">
				<h2>Your Text summary</h2>
				<p>
					{text.split(" ").length} words and {text.length} characters
				</p>
				<p>{0.008 * text.split(" ").length} Minutes read</p>
				<h2>Preview</h2>
				<p>{text}</p>
			</div>
		</>
	);
}
