import React, { useState } from "react";

export default function TextFrom(props) {
	const handleUpclick = () => {
		let newtext = text.toUpperCase();
		setText(newtext);
		props.showAlert("Convert to Uppercase!","success")
	};
	const handleLoclick = () => {
		let newtext = text.toLowerCase();
		setText(newtext);
		props.showAlert("Convert to Lowercase!","success")
	};
	const handleOnChange = (event) => {
		setText(event.target.value);
	};

	const handleCopyText=()=>{
		navigator.clipboard.writeText(text);
		props.showAlert("Copied to Clipboard!","success")
	}

	const handleClearText =()=>{
		let newText=''
		setText(newText)
		props.showAlert("Text Cleared!","success")
	}

	const handleExtraSpace=()=>{
		let newText=text.split(/\s+/).join(" ");
		setText(newText)
		props.showAlert("Extra spaces removed!","success")
	}

	const handleTitleCase = () => {
		let newText = text.toLowerCase().split(' ');
		for (let i = 0; i < newText.length; i++) {
			newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
		}
		setText(newText.join(' '));
		props.showAlert("Convert to Titel Case!","success")
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
				<button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpclick}>
					Convert to Uppercase
				</button>
				<button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLoclick}>
					Convert to Lowercase
				</button>
				<button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleTitleCase}>
					Convert to Title Case
				</button>
				<button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopyText}>
					Copy
				</button>
				<button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpace}>
					Remove Extra Space
				</button>
				<button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearText}>
					Clear
				</button>
				
			</div>
			<div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
				<h2>Your Text summary</h2>
				<p>
					{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
				</p>
				<p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
				<h2>Preview</h2>
				<p>{text.length>0?text:"Nothing to Preview"}</p>
			</div>
		</>
	);
}
