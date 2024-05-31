import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import "./intro.scss";

function Intro() {
  const textRef = useRef(null);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Front End Developer", "Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/passportPhoto.png" alt="Rahul Kumar Yadav" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Rahul Kumar Yadav</h1>
          <h3>
            ReactJs <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="The Down Logo" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
