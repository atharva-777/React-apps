import React, { useState } from "react";
import PropTypes from "prop-types";

function TextForm(props) {
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    props.showAlert("Text converted to UPPERCASE", "success");
    console.log("uppercase clicked" + text);
    let newText = text.toUpperCase();
    console.log(newText);
    setText(newText);
  };
  const handleLwClick = () => {
    props.showAlert("Text converted to lowercase", "danger");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handlecClick = () => {
    props.showAlert("Text cleared", "danger");
    setText("");
  };

  const countVowels = () => {
    props.showAlert("Vowels has been counted plz check-out", "warning");
    let cnt = 0;
    for (let c = 0; c <= text.length; c++) {
      if (text.charAt(c).match(/[aeiouAEIOU]/)) {
        cnt++;
        setCount(cnt);
      }
    }
  };

  const handleSpeak = () => {
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const [text, setText] = useState("Enter text here");
  const [count, setCount] = useState(0);
  return (
    <div className="containerr">
      <h1
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        {props.heading}
      </h1>
      <div className="my-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="10"
          value={text}
          onChange={handleOnChange}
          // style={props.mode==='light'?{backgroundColor:'white'}:{backgroundColor:'black'}}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#212529",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
      </div>
      <button
        className="btn btn-primary mx-2 my-2"
        onClick={handleUpClick}
        disabled={text.length === 0}
      >
        Convert Text to UPPERCASE
      </button>
      <button
        className="btn btn-danger mx-2 my-2"
        onClick={handleLwClick}
        disabled={text.length === 0}
      >
        Convert Text to lowercase
      </button>
      <button
        className="btn btn-primary my-2"
        onClick={countVowels}
        disabled={text.length === 0}
      >
        Count of vowels
      </button>
      <button
        className="btn btn-success mx-2 my-2"
        onClick={handlecClick}
        disabled={text.length === 0}
      >
        Clear Text
      </button>
      <div
        className="containerr my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Text Summary</h2>
        <p>
          Given text has{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words & {text.length} characters
        </p>
        <p>
          Average time to read this text :{" "}
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes
        </p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to preview"}</p>

        <h2>Number of vowels</h2>
        <p>Number of vowels in a text are : {count}</p>

        <h2>Speak the text</h2>
        <button className="btn btn-primary" onClick={handleSpeak}>
          Speak
        </button>
      </div>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};

TextForm.defaultProps = {
  heading: "Text to be analyzed",
};

export default TextForm;
