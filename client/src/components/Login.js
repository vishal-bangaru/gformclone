import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import validator from "validator";
import Register from "./Register";
import "./Login.css"
export default function Login(props) {
  const [login, setLogin] = useState({});

  let history = useHistory();

  const handleChange = (e) => {
    if (e.target.name == "email") {
      login.email = e.target.value;
    } else if (e.target.name == "password") {
      login.password = e.target.value;
    }
    setLogin(login);
  };
  console.log(window.location.hostname)
  const handleLogin = () => {
    if (!validator.isEmail(login.email)) {
      var error = document.getElementById("error");
      error.style.display = "block";
    } else {
      fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.message == "Password Incorrect") {
            var error = document.getElementById("error-user");
            error.style.display = "block";
          } else if (data.message == "User does not exist") {
            var error = document.getElementById("error-new");
            error.style.display = "block";
          } else if (data.message == "Logged In") {
            localStorage.setItem("token", data.token);
            alert("Succesfully Logged In");
            props.handleLogin();
            history.push("/home");
          }
        });
    }
  };

  return (<>
    <div className="container-fluid">
      <br/>
      <br/>
      <br/>
      <div className="row">
        <div className="col-sm-6 mx-auto text-black shadow-lg p-5 rounded frm">
          <h1 className="text-center lead display-3 text-success fw-1">Login</h1>
          <br />
          <div className="row d-flex justify-content-center">
            <p style={{ display: "none", color: "red" }} id="error-new">
              *User does not exist
            </p>
            <div className="col-2 p-2">
              <h5 className="lead">Email :</h5>
            </div>
            <div className="col-9">
              <input
                type={"email"}
                placeholder="Write Your Email Here"
                className="form-control p-2"
                name="email"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <p style={{ display: "none", color: "red" }} id="error">
              *Email id is not valid
            </p>
          </div>
          <br />
          <div className="row d-flex justify-content-center">
            <div className="col-2 p-2">
              <h5 className="lead">Password:</h5>
            </div>
            <div className="col-9">
              <input
                type={"password"}
                placeholder="Set Your Password Here"
                className="form-control p-2"
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <p style={{ display: "none", color: "red" }} id="error-user">
              *Password Incorrect
            </p>
          </div>
          <br />
          <button
            className="btn btn-outline-success p-3 fw-bold mx-3"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
