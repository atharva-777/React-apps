import React, { useState } from "react";
import PropTypes from "prop-types";


function TextForm(props) {
  const handleOnChange = (event) => {
    console.log('on change')
    setText(event.target.value);
  }
  const handleUpClick = () => {
    console.log('uppercase clicked'+text)
    let newText = text.toUpperCase();
    console.log(newText)
    setText(newText);
  }
  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handlecClick = () => {
    setText('');
  }
  const [text,setText] = useState('Enter text here');
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="my-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="10"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert Text to UPPERCASE
      </button>
      <button className="btn btn-danger mx-2" onClick={handleLwClick}>
        Convert Text to lowercase
      </button>
      <button className="btn btn-success mx-2" onClick={handlecClick}>Clear Text</button>
      <div className="container my-3">

        <h2>Text Summary</h2>
        <p>Given text has {text.split(' ').length} words & {text.length} characters</p>
        <p>Average time to read this text : {0.008*(text.split(' ').length)} Minutes</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading : PropTypes.string,
 };

TextForm.defaultProps = {
  heading: "Text to be analyzed",
};

export default TextForm;
