import { Link, NavLink } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer_content flex-row justify-between align-center">
        <div className="footer_logo">
          <NavLink exact to="/"><h1>Reels</h1></NavLink>
        </div>

        <div className="footer_links">
          <p className="footer_title">Shop</p>
          <div className="flex-col">
            <Link to="/collections/womens">Women</Link>
            <Link to="/collections/mens">Men</Link>
          </div>
          </div>

        <div className="footer_links">
          <p className="footer_title">My Other Works</p>
          <div className="flex-col">
            <Link to={{ pathname: "https://fee3fitri.github.io/gtrends_project/" }} target="_blank">
              gTrends
            </Link>
            <Link to={{ pathname: "https://treasure-mhx1.onrender.com/" }} target="_blank">
              Treasure
            </Link>
          </div>
        </div>

        <div className="footer_author flex-col align-center">
          <p>Made with <i className="fa-solid fa-heart"></i> by Safitri Shelton</p>
          <div className="flex-row justify-center">
            <Link to={{ pathname: "https://github.com/fee3fitri" }} target="_blank">
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link to={{ pathname: "https://www.linkedin.com/in/safitri-shelton/" }} target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;