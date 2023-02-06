import React from 'react'
import './contact.css'


const Contact = ({mode}) => {


  const myStyle = {
    color: mode === "dark" ? "white" : "#212529",
    backgroundColor: mode === "dark" ? "#212529" : "white",
  };

  return (
    <div className="containerr my-3" style={myStyle}>
      <h2>Contact us</h2>

      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            style={myStyle}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text" style={myStyle}>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            style={myStyle}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <div className="my-3">
          <label className="my-3" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            rows="5"
            style={myStyle}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact
