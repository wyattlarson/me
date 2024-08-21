import React, { useEffect, useState } from "react";
import "./index.css";
import { SocialIcon } from "react-social-icons";
import bg from "./images/banner-dunes-tall.jpeg";
import bgWide from "./images/banner-dunes-wide.jpeg";
import Logo from "./images/flip.png";
import Dust from "./images/dust.webp"
import fgBack from "./images/foreground-back.webp";
import fgFront from "./images/foreground-front.webp"
import { ReactLenis } from "@studio-freight/react-lenis";

const Landing = () => {
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
  };
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1033);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 1033);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ReactLenis root options={lenisOptions}>
      <body>
        <div className="parallax">
          <header className="primary-header">
            <div className="wrapper">
              <div className="primary-header__inner">
                <div className="logo">
                 
                </div>
                <nav className="primary-nav">
                  <ul>
                    <li className="link">
                      <a href="/">Courses</a>
                    </li>
                    <li className="link">
                      <a href="/resume.pdf" download="WyattLarsonResume.pdf">Resume</a>
                    </li>
                  </ul>
                </nav>
                <div className="flex-group" aria-label="social links">
                  <SocialIcon
                    className="link"
                    url="https://www.linkedin.com/in/wyatt-larson/"
                    target="_blank"
                    style={{scale:"0.6"}}
                    bgColor="#1F2227"
                  />
                </div>
              </div>
            </div>
          </header>
          <div className="hero">
            <div className="wrapper">
              <h1 className="hero__title">
                Welcome, I am
              </h1>
              <span>Wyatt Larson</span>
              
              {/* <button className="button">Sign up for beta</button> */}
            </div>
          </div>

          <img className="parallax__bg" src={isSmallScreen ? bg : bgWide} alt="Background Dusty" />
          <img className="parallax__dust" src={Dust} alt="Dust" />
          {/* <img className="parallax__rays" src="assets/rays.webp" alt="Dust" /> */}
          <img
            className="parallax__foreground-back"
            src={fgBack}
            alt="Foreground Back"
          />
          <img
            className="parallax__foreground-front"
            src={fgFront}
            alt="Foreground Front"
          />
          <img className="parallax__jax" src={Logo} alt="Jax Character" />

         </div>
        <main className="main-content">
          <div className="wrapper">
            <p className="scrollReveal">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                nostrum aspernatur nesciunt rem, officiis atque deserunt
                architecto excepturi ducimus consectetur suscipit dolore sed
                tempora, assumenda corporis eius quasi quas pariatur.
              </span>
            </p>
            <p className="scrollReveal">
              <span>
                Sed minus alias quidem error fuga sint temporibus, accusamus
                totam! Voluptates, deserunt? Dolore nulla iure asperiores
                quibusdam officia pariatur deleniti aspernatur, assumenda
                numquam blanditiis cumque voluptatem deserunt nesciunt, ea
                atque!
              </span>
            </p>
            <p className="scrollReveal">
              <span>
                Dolor tenetur error similique, voluptatibus blanditiis deleniti
                distinctio! Officia a, porro nobis provident illum deleniti
                nulla consequuntur voluptatum enim repellat, architecto quas
                mollitia consectetur assumenda rem magnam maiores ad nostrum.
              </span>
            </p>
           
            
          </div>
        </main>
      </body>
    </ReactLenis>
  );
};

export default Landing;
