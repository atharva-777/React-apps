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
  
  const countVowels = () => {
    let cnt = 0;
    for(let c=0;c<=text.length;c++){
      if(text.charAt(c).match(/[aeiou]/)){
        cnt++;
    setCount(cnt);
      }
    }
  }


  const handleSpeak = () => {
    let utterance = new SpeechSynthesisUtterance(
      text
    ); 
    speechSynthesis.speak(utterance); 
  }

  
  
  const [text,setText] = useState('Enter text here');
  const [count,setCount] = useState(0);
  return (
    <>
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
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert Text to UPPERCASE
      </button>
      <button className="btn btn-danger mx-2" onClick={handleLwClick}>
        Convert Text to lowercase
      </button>
      <button className="btn btn-primary" onClick={countVowels}>
        Count of vowels
      </button>
      <button className="btn btn-success mx-2" onClick={handlecClick}>
        Clear Text
      </button>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Text Summary</h2>
        <p>
          
          Given text has {text.split(" ").length} words & {text.length}{" "}
          characters
        </p>
        <p>
          Average time to read this text : {0.008 * text.split(" ").length}{" "}
          Minutes
        </p>

        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter text to preview'}</p>

        <h2>Number of vowels</h2>
        <p>Number of vowels in a text are : {count}</p>

        <h2>Speak the text</h2>
        <button className="btn btn-primary" onClick={handleSpeak}>
          Speak
        </button>
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
