// import logo from './logo.svg';
import React, { useState } from 'react'

import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode,setMode] = useState('light');
  const toggleMode = () => {
    if(mode==='light'){
      document.body.style.backgroundColor = 'dark'
      setMode("dark");
    }else{
      setMode("light");
      document.body.style.backgroundColor = "light";
    }
  };
  return (
    <>
      <Navbar mode={mode} home="Text Utils" explore="Contact us" about="About us" toggleMode={toggleMode} />

      <div className="container my-3" style={{ background: "white" }}>
        <TextForm heading="Enter the text below"/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
