import React, { useState } from "react";

export default function FormText(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const countActualWord = (word)=> {
    return word.split(/\s+/).filter(Boolean).length;
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color : props.mode==='dark' ? 'white':'#042743'}}>
        <h1>{props.header}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{backgroundColor : props.mode === 'dark' ? '#042743' : 'white', 
              color : props.mode==='dark' ? 'white':'#042743'
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-2" style={{color : props.mode==='dark' ? 'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>
          {countActualWord(text)} Words and {text.length} Characters
        </p>
        <p>{0.08 * countActualWord(text)} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text : "Enter something in above box to preview it"}</p>
      </div>
    </>
  );
}
