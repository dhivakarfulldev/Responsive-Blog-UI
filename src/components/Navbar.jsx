import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-links">
        <Link to="/">ALL</Link>
        <Link to="/fullstackdev">Full Stack Development</Link>
        <Link to="/datascience">Data Science</Link>
        <Link to="/cybersecurity">Cyber Security</Link>
        <Link to="/ai">AI</Link>
        <Link to="/career">Career</Link>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Navbar;
