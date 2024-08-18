import React, { useState } from "react";
import "./home.css";
import screenshot from "../../assets/screenshot.png";
import { IoSearchSharp } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [politicians, setPoliticians] = useState([
    { id: 1, name: "William Samoei Ruto", image: "https://up.yimg.com/ib/th?id=OIP.s7p8x68PzoufeB_QW0HuAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=104&h=104" },
    { id: 2, name: "Jane Smith", image: "https://up.yimg.com/ib/th?id=OIP.s7p8x68PzoufeB_QW0HuAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=104&h=104" },
    { id: 3, name: "Bob Johnson", image: "https://up.yimg.com/ib/th?id=OIP.s7p8x68PzoufeB_QW0HuAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=104&h=104" },
    { id: 4, name: "Alice Brown", image: "https://up.yimg.com/ib/th?id=OIP.s7p8x68PzoufeB_QW0HuAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=104&h=104" },
    { id: 5, name: "Charlie Wilson", image: "https://up.yimg.com/ib/th?id=OIP.s7p8x68PzoufeB_QW0HuAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=104&h=104" },
  ]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchTerm);
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
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="main">
        <form className="search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for politicians"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <IoSearchSharp className="svg" />
          </button>
        </form>

        <div className="politicians-grid">
          {politicians.map((politician) => (
            <div key={politician.id} className={`politician-card size-${politician.id}`}>
              <img src={politician.image} alt={politician.name} />
              <h3>{politician.name}</h3>
            </div>
          ))}
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
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
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

export default Home;