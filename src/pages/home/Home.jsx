import "./home.css";
import screenshot from "../../assets/screenshot.png";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav>
        <div className="imgWrapper">
          <img src={screenshot} alt="nav" className="img" />
        </div>
        <div
          className={`hamburger-button ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
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
        <div className="search">
          <input type="text" placeholder="search for politicians" />
          <button>
            <IoSearchSharp className="svg" />
          </button>
        </div>

        <div className="homeimage">
          <div className="imagewrap">
            <img src='https://up.yimg.com/ib/th?id=OIP.s7p8x68PzoufeB_QW0HuAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=104&h=104' alt=""></img>
          </div>
          <div className="imagewrap">
            <img src='https://up.yimg.com/ib/th?id=OIP.s7p8x68PzoufeB_QW0HuAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=104&h=104' alt=""></img>
          </div>
          <div className="imagewrap">
            <img src='https://up.yimg.com/ib/th?id=OIP.s7p8x68PzoufeB_QW0HuAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=104&h=104' alt=""></img>
          </div>
          <div className="imagewrap">
            <img src='https://up.yimg.com/ib/th?id=OIP.s7p8x68PzoufeB_QW0HuAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=104&h=104' alt=""></img>
          </div>
          <div className="imagewrap">
            <img src='https://up.yimg.com/ib/th?id=OIP.s7p8x68PzoufeB_QW0HuAgHaHa&pid=Api&rs=1&c=1&qlt=95&w=104&h=104' alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;