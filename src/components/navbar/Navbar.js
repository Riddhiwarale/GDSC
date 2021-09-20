import React from "react";
// import "./Page.css";

import Group1 from "../../assets/images/NavbarImages/Group1.png";
import Group20 from "../../assets/images/NavbarImages/Group20.png";

export default function Navbar() {
  function switchTheme() {
    var theme = document.body;
    theme.classNameList.toggle("dark");
  }

  function opennav() {
    console.log("pressed");
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("body");
    if (x.classNameName === "togglenav2") {
      x.classNameName += " responsive";
      y.classNameName += " scroll";
    } else {
      x.classNameName = "togglenav2";
      y.classNameName = "bodyi";
    }
  }
  return (
    <div>
      <body id="body" classNameName="bodyi">
        <div className="navbar">
          <div className="toggle">
            <div className="bar" onclick={opennav}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="togglenav2" onclick={opennav}>
              <div className="nav_active">Home</div>
              <div>Our Team</div>
              <div>Events</div>
              <div>Resources</div>
              <div>Contact Us</div>
              <div>Partner Us</div>
            </div>
          </div>
          <div className="part2">
            <div className="nav_active">Home</div>
            <div>Our Team</div>
            <div>Events</div>
          </div>
          <div className="part1">
            <img src={Group20} alt="" />
          </div>
          <div className="part3">
            <div>Resources</div>
            <div>Contact Us</div>
            <div>Partner Us</div>
            <button className="theme" onclick={switchTheme}>
              <img src={Group1} alt="" />
            </button>
          </div>
        </div>

        <div className="grid">
          <div className="text">
            <div className="info">
              <p className="aim">Our Aim</p>
              <h1>
                {/* <span style="color: #ff2442">Converting</span>
            <span style="color: #50cb93">Ideas</span>
            <span style="color: #ffe459">Into</span>
            <span style="color: #3db2ff">Reality</span> */}
              </h1>
              <p>
                Google Developer Student Club Vit
                <br />
                is community of students from all undergraduate
                <br />
                or graduate programs with an internet and
                <br />
                growing as a developer are welcome
              </p>
              <hr />

              <div className="button">
                <input
                  type="text"
                  name=""
                  placeholder="Join us with your email address"
                  id=""
                />
                <button>Join Now</button>
              </div>
            </div>
          </div>
          <div className="img">{/* <img src={google3} alt="" /> */}</div>
        </div>
      </body>
    </div>
  );
}
