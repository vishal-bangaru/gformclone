import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {decode as atob} from 'base-64'
import "./Navbar.css"
export default function Navbar(props){

  let history = useHistory();

  var [log, setLog] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(atob(token.split(".")[1]));
      if (!user) {
        localStorage.removeItem("token");
      } else {
        const login = document.getElementById("login");
        const register = document.getElementById("register");
        login.style.display = "none";
        register.style.display = "none";
        const logout = document.getElementById("logout");
        logout.style.display = "block";
      }
    } else {
      const logout = document.getElementById("logout");
      logout.style.display = "none";
      const login = document.getElementById("login");
      const register = document.getElementById("register");
      login.style.display = "block";
      register.style.display = "block";
    }
  }, [log,props.login]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLog(1);
    history.push("/");
  };

    return(
        <>
        <nav class="navbar navbar-expand-lg text-dark p-3 shadow   " >
  <Link class="navbar-brand text-light" style={{fontSize : "30px"}} to = "/">ZA-<span style={{color : "white"}}>Form</span></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" style={{marginLeft : "40%"}} id="navbarSupportedContent">
    <ul class="navbar-nav  mr-auto">
      <li class="nav-item mx-4 active">
        <Link class="nav-link text-light  fs-5  fw-2" to = "/home">Home</Link>
      </li>
      <li class="nav-item mx-4 active">
        <Link class="nav-link text-light  fs-5  fw-2" to = "/CreateTest">CreateForm</Link>
      </li>
      <li class="nav-item mx-4">
        <Link class="nav-link text-light  fs-5  fw-2" id = 'login' to = "/login">Login</Link>
      </li>
      <li class="nav-item mx-4">
        <Link class="nav-link text-light  fs-5  fw-2" id='register' to = "/register">Register</Link>
      </li>
      <li class="nav-item ms-5">
            <button
              class="nav-link text-light  ms-5 btn  fs-5  fw-1 "
              style={{ display: "none" }}
              id="logout"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
    </ul>
  </div>
</nav>
</>
    )
}