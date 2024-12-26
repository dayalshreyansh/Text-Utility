import React, { useState } from "react";

export default function TextForm(prop) {
  const [text, setText] = useState("Enter Text Here");
  const handleUpClick = () => {
    if (text) {
      let newText = text.toUpperCase();
      setText(newText);
      prop.showAlert("Success: Text is in uppercase", "success");
    } else {
      prop.showAlert("Danger: No Text Enter", "danger");
    }
  };
  const handleLoClick = () => {
    if (text) {
      let newText = text.toLowerCase();
      setText(newText);
      prop.showAlert("Success: Text is in Lowercase", "success");
    } else {
      prop.showAlert("Danger: No Text Enter", "danger");
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText("");
    prop.showAlert("Success: Text is in Clear", "success");
  };
  const handleCapClick = () => {
    if (text) {
      let newText = "";
      newText += text[0].toUpperCase();
      for (let i = 1; i < text.length; i++) {
        if (text[i - 1] === " ") {
          newText += text[i].toUpperCase();
        } else {
          newText += text[i].toLowerCase();
        }
      }
      setText(newText);
      prop.showAlert("Success:Text is in Capatalized Case", "success");
    } else {
      prop.showAlert("Danger: No Text Enter", "danger");
    }
  };
  let words = text.split(" ").length;   
  return (
    <>
      <div className="mb-3" style={prop.myStyle}>
        <h1>{prop.heading}</h1>
        <textarea
          className="form-control"
          id="text"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={prop.myStyle}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCapClick}>
        Convert to Capatalize Case
      </button>

      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear Text
      </button>
      <div className="container my-4" style={prop.myStyle}>
        <h2>Your Text Summary</h2>
        <p>
          {text.length}-charecters and {words}-words
        </p>
        <p>Time Taken to read :{0.008 * words}mins</p>
      </div>
      <div className="container" style={prop.myStyle}>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
