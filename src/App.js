// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Footer  from "./components/Footer";

function App() {
  return (
    <>
      <Navbar
        home="textUtilsHome"
        explore="textUtilsExplore"
        about="textUtilsAbout"
      />

      <div className="container my-3" style={{color:"green"}}>
        <TextForm heading="Enter the text below to check"                                                                                                                                                                                                   />
      </div>

      <Footer name='Atharva'/>

    </>
  );
}

export default App;
