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

	const handleCopyText=()=>{
		navigator.clipboard.writeText(text);
		return alert("Copy Successfully.")
	}

	const handleClearText =()=>{
		let newText=''
		setText(newText)
	}

	const handleExtraSpace=()=>{
		let newText=text.split(/\s+/).join(" ");
		setText(newText)
	}

	const handleTitleCase = () => {
		let newText = text.toLowerCase().split(' ');
		for (let i = 0; i < newText.length; i++) {
			newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
		}
		setText(newText.join(' '));
	};
	console.log(props.mode);
	
	const [text, setText] = useState("");
	return (
		<>
			<div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
				<h1>{props.heading}</h1>
				<div className="mb-3">
					<textarea
						className="form-control"
						id="mybox"
						rows="8"
						onChange={handleOnChange}
						value={text}
						style={{ backgroundColor: props.mode === 'dark' ? '#202046' : 'white', color: props.mode === 'dark' ? 'white' : 'black'  }}
					></textarea>
				</div>
				<button className="btn btn-primary mx-1" onClick={handleUpclick}>
					Convert to Uppercase
				</button>
				<button className="btn btn-primary mx-1" onClick={handleLoclick}>
					Convert to Lowercase
				</button>
				<button className="btn btn-primary mx-1" onClick={handleTitleCase}>
					Convert to Title Case
				</button>
				<button className="btn btn-primary mx-1" onClick={handleCopyText}>
					Copy
				</button>
				<button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
					Remove Extra Space
				</button>
				<button className="btn btn-primary mx-1" onClick={handleClearText}>
					Clear
				</button>
				
			</div>
			<div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
				<h2>Your Text summary</h2>
				<p>
					{text.split(" ").length} words and {text.length} characters
				</p>
				<p>{0.008 * text.split(" ").length} Minutes read</p>
				<h2>Preview</h2>
				<p>{text.length>0?text:"Nothing to Preview"}</p>
			</div>
		</>
	);
}
