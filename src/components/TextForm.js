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
    setText('CamelCase is clicked');
  }
  const [text,setText] = useState('Enter text here');
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
        // style={{backgroundColor:'aqua',color:'red'}}
          className="form-control"
          id="myBox"
          rows="10"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert Text to UPPERCASE
      </button>
      <button className="btn btn-primary" onClick={handleLwClick}>
        Convert Text to LOWERCASE
      </button>
      <button className="btn btn-primary" onClick={handlecClick}>CamelCase</button>
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
