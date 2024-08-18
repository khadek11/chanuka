import React, { useState } from "react";
import "./home.css";
import screenshot from "../../assets/screenshot.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="home-container">
      <nav>
        <div className="imgWrapper">
          <img src={screenshot} alt="nav" className="img" />
        </div>
        <div className={`hamburger-button ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">Contact</Link>
      </div>
      <div className="main">
        <h1 className="about">About Us</h1>
        <div className="about-content">
          <p>Welcome to our Political Information Site. We are dedicated to providing accurate and up-to-date information about politicians and their activities.</p>
          <p>Our mission is to promote transparency in politics and help citizens make informed decisions. We believe that an informed electorate is crucial for a healthy democracy.</p>
          <h2>Our Team</h2>
          <p>Our team consists of passionate individuals from various backgrounds, including political science, journalism, and data analysis. We work tirelessly to gather and verify information from reliable sources.</p>
          <h2>Our Commitment</h2>
          <p>We are committed to:</p>
          <ul>
            <li>Providing unbiased and factual information</li>
            <li>Regularly updating our database of politicians</li>
            <li>Promoting political awareness and engagement</li>
            <li>Maintaining the highest standards of journalistic integrity</li>
          </ul>
          <p>Thank you for visiting our site. We hope you find the information here valuable and informative.</p>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>We provide information about politicians and their activities.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
                
             <li> <Link to="/">Home</Link> </li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Political Information Site. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default About;