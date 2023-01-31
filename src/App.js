// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar
        home="Text Utils"
        explore="Contact us"
        about="About us"
      />

      <div className="container my-3" style={{background:'white'}}>
        <TextForm heading="Enter the text below"/>
      </div>


    </>
  );
}

export default App;
