import React from "react";
import {useState} from "react"
import { useHistory } from "react-router-dom";
import validator from 'validator';
import "./Login.css"
export default function Register() {

  const [register,setRegister] = useState({})

  const history = useHistory();

  const handleChange = (e) => {
    if(e.target.name == 'name'){
      register.name = e.target.value;
    } else if(e.target.name == 'email'){
      register.email = e.target.value;
    } else if(e.target.name == 'password'){
      register.password = e.target.value;
    }

    setRegister(register)
  }

  const handleRegister = () => {
    if(!validator.isEmail(register.email)){
      var error = document.getElementById("error")
      error.style.display = "block";
    }
    else{
     
      fetch('/auth/register',{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(register)
      }).then((res) => {
        return res.json()
      }).then((data) => {
        if(data.message == "user already exists"){
          var error = document.getElementById("error-user")
          error.style.display = "block";
        }
        else if (data.message == "Registered"){
          alert("Succesfully Registered")
          // navigate("/login", { replace: true })
          history.push('/login')
        }
      })
    }
  }

  return (
    <div className="container-fluid ">
      <br/>
      <br/>
      <br/>
      <div className="row ">
        <div className="col-sm-6 mx-auto text-black shadow-lg p-3 frm">
          <h1 className="text-center lead display-3 text-success p-1">Register</h1>
          <p className="text-center text-secondary  p-3">
            You can simply register by using name,email and setting up the
            password.
          </p>
          <div className="row">
            <p style={{display : "none", color : "red"}} id = "error-user">*User already exists</p>
            <div className="col-2 text-center">
              <h5 className="lead">Name :</h5>
            </div>
            <div className="col-9">
              <input
                type="text"
                placeholder="Write Your Name Here"
                className="form-control"
                name= "name"
                onChange={(e) => {handleChange(e)}}
              />
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-2 text-center">
              <h5 className="lead ">Email :</h5>
            </div>
            <div className="col-9">
              <input
                type={"text"}
                placeholder="Write Your Email Here"
                className="form-control"
                name= "email"
                onChange={(e) => {handleChange(e)}}
              />
            </div>
            <p style={{display : "none", color : "red"}} id = "error">*Email id is not correct</p>
          </div>
          <br/>
          <div className="row">
            <div className="col-2 text-center">
              <h5 className="lead">Set Password: </h5>
            </div>
            <div className="col-9">
              <input
                type={"password"}
                placeholder="Set Your Password Here"
                className="form-control"
                name= "password"
                onChange={(e) => {handleChange(e)}}
              />
            </div>
          </div>
          <br/>
          <button className="btn btn-outline-success p-3 fw-bold mx-2" onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
}
