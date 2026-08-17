import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {

    const [show ,   setshow] = useState(false);
  return (
    <>
      <header>
        <div className="header">
          <div className="content">
            <div className="left-content">
              <h3>Logo</h3>
              <p>|</p>
              <h3>Blog</h3>
              <div className="input-content">
                <i className="fa-solid fa-bars bar" onClick={() => (setshow(true))}></i>
                <input type="text" placeholder="What do you want to read?" />
                <i className="fa-solid fa-magnifying-glass icon"></i>
              </div>
            </div>
            <div className="right-content">
              <h5>Sign In</h5>
            </div>
          </div>
        </div>
        <nav className={show ? "nav show" : "nav"}>
          <i
            className="fa-solid fa-xmark close"
            onClick={() => setshow(false)}
          ></i>

          <Link to="/">ALL</Link>
        <Link to="/fullstackdev">Full Stack Development</Link>
        <Link to="/datascience">Data Science</Link>
        <Link to="/cybersecurity">Cyber Security</Link>
        <Link to="/ai">AI</Link>
        <Link to="/career">Career</Link>
        </nav>

      </header>


    </>
  );
};

export default Header;
