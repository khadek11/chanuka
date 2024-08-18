import React, { useState } from "react";
import "./home.css";
import screenshot from "../../assets/screenshot.png";
import { IoSearchSharp } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPoliticians, setFilteredPoliticians] = useState([]);
  const [politicians] = useState([
    { id: 1, name: "William Samoei Ruto", image: "https://up.yimg.com/ib/th?id=OIP.s7p8x68PzoufeB_QW0HuAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=104&h=104" },
    { id: 2, name: "Raila Odinga", image: "https://tse1.mm.bing.net/th?id=OIP.uazUMC9JDVxZ1CrHcjjJgwHaFd&pid=Api" },
    { id: 3, name: "Antony Kimani", image: "https://genmiles.com/wp-content/uploads/2023/04/Anthony-Kimani-Ichungwa-jpg.webp" },
    { id: 4, name: "Alice Brown", image: "https://president.go.ke/wp-content/uploads/A33O4896-scaled-e1667324348580.jpg" },
    { id: 5, name: "Adan Ndwale", image: "https://tse1.mm.bing.net/th?id=OIP.Vz4x09SKJHxOkxeNMuSoowHaHa&pid=Api&P=0&h=220" },
  ]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    // Filter politicians based on search term
    const filtered = politicians.filter(politician =>
      politician.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPoliticians(filtered);
  }, [searchTerm, politicians]);


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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">Contact</Link>
       
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
           {filteredPoliticians.map((politician) => (
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

export default Home;