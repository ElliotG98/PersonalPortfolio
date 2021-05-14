import React,{useEffect, useState} from 'react';
import '../Styling/Landing.css';
import TextGraphic from '../Images/TextGraphics_1.gif';
import ScrollIcon from '../Images/ScrollIcon.svg';

import EmailIcon from '../Images/EmailIcon.svg';
import GithubIcon from '../Images/GithubIcon.svg';
import HamburgerIcon from '../Images/HamburgerIcon.svg';
import InstagramIcon from '../Images/InstagramIcon.svg';
import TwitterIcon from '../Images/TwitterIcon.svg';


function Landing() {
  const [scrolled, setScrolled]=useState(false);
  const [isActive, setActive]=useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 150){
      setScrolled(true);
    }else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, []);

  let x = ['scrollIcon'];
  if(scrolled){
    x.push('scrolled');
  }
  return(
    <header >
    <div className="headerName">{"Elliot \n Glaze"}</div>

    <img className="textGraphic" src={TextGraphic} alt="Hi, I'm a developer"/>

      <nav className="nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
        </ul>
      </nav>

      <div className="socialMenu">
        <span className={isActive ? "show" : "hidden"}><a href="https://github.com/ElliotG98"><img src={GithubIcon} alt="Github Icon"/></a></span>
        <span className={isActive ? "show" : "hidden"}><a href="https://www.instagram.com/elliotglaze/"><img src={InstagramIcon} alt="Instagram Icon"/></a></span>
        <span className={isActive ? "show" : "hidden"}><a href="https://twitter.com/GlazeElliot"><img src={TwitterIcon} alt="Twitter Icon"/></a></span>
        <span className={isActive ? "show" : "hidden"}><a href="mailto:elliotglaze98@gmail.com"><img src={EmailIcon} alt="Email Icon"/></a></span>
        <span onClick={handleToggle}><img src={HamburgerIcon} alt="Hamburger menu icon" /></span>
      </div>

      <div className={x.join(" ")}>
        <a href="#about">
        <img src={ScrollIcon} alt="scroll icon"/>
        <p>scroll to discover</p>
        </a>
      </div>

    </header>
  );
}

export default Landing;
