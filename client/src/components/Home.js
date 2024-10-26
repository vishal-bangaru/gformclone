import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <iframe
        className="background-iframe"
        src="https://my.spline.design/untitled-f97c8e677d8dc13b0a32808689accdca/"
        frameBorder="0"
        title="background"
      ></iframe>

      <div className="foreground-content text-center ">
        <h1 className="text-center display-1 fw-bold lead text-light">
          Ziegler Aerospace
        </h1>
        <h2 className="text-light">Ziegler Forms</h2>
        <p className="lead mt-4 ">
          Ziegler-Form is a clone of real Google Forms. Create your own tests
          and forms and check the responses.
        </p>
        <div >
        <h2 className="text-light ">How To Get Started</h2>
        <p className="lead mt-4 ">
          If you don't have an account, start by registering with your name,
          email, and setting a password. After publishing a test, you’ll get a
          link to share and gather responses.
        </p>
        </div>
      </div>
    </div>
  );
}
