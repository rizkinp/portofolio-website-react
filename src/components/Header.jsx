import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Header() {
  const {text} = useTypewriter({
    words: ['Student', 'Developer', 'Lover'],
    loop:{},
    typeSpeed:120,
  });
  return (
    <header className="header" id="Home">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header_content">
              <div className="header-section" > {/* Add id="Home" here */}
                {/* <TypingEffect/> */}
                {/* <h1>
                  I'm a <span>
                    {text}
                  </span>
                  <Cursor/>
                </h1> */}
                <h1>
                  Hello..
                  <br /> My name's Rizki
                </h1>
                <p>An amateur student who is interested in the field of technology, especially web development and mobile application development, if you want to know me more press the button below</p>
                <button className="button-64" role="button"><span className="text">Hire Me!</span></button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="image-wrapper">
              <img src="/image/riskibaru.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
