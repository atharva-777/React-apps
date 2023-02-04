// import logo from './logo.svg';
import React, { useState } from 'react'
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState('light');

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
      setAlert({
        message:message,
        type:type,
      })
      setTimeout(()=>{
        setAlert(null);
      },2000)
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert('Dark mode enabled','success');
      document.title = 'Dark mode enabled';
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('Light mode enabled','danger');
      document.title=("TExtUtils-Light");
    }
  };
  return (
    <Router>
      <Navbar
        mode={mode}
        home="Text Utils"
        explore="Contact us"
        about="About us"
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      {/* <div className="container my-3">
        <About />
      </div> */}

      <Routes>
        <Route exact path="/About" element={<About />}>
          {/* <About /> */}
        </Route>

        
          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter text below"
                mode={mode}
              />
            }
          >
            {/* <TextForm
              showAlert={showAlert}
              heading="Enter the text below"
              mode={mode}
            /> */}
          </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
