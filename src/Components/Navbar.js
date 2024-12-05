import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CodeIcon from "@mui/icons-material/Code";
import "../Css Styles/Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      if (window.scrollY > 0 && isToggled) {
        setIsToggled(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isToggled]);

  const handleLinkClick = () => {
    setIsToggled(false); 
  };

  const handleToggleClick = () => {
    setIsToggled(!isToggled); 
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${isScrolled ? "scrolled-navbar" : ""}`}
      style={{
        backgroundColor: isScrolled ? "rgba(28, 55, 91, 0.8)" : "",
        transition: "background-color 0.3s ease-in-out",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <CodeIcon style={{ fontSize: 50, color: "#ff5722" }} /> &nbsp;
          <span className="Brand-Name">CodeSphere</span>
        </a>
        <button
          className="navbar-toggler btn-toggle"
          type="button"
          data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation" aria-expanded={isToggled ? "true" : "false"}
          onClick={handleToggleClick}
        >

          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`offcanvas  offcanvas-end  ${isToggled ? "show" : ""}`} tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel" >CodeSphere</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
          <ul className="style-links navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#home" onClick={handleLinkClick}>Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#about" onClick={handleLinkClick}>About Us</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#programs" onClick={handleLinkClick}>Programs</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#pricing" onClick={handleLinkClick}>Pricing</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#courses" onClick={handleLinkClick}>Courses</a>
            </li>
            <li className="nav-item active shadow-sm">
              <a className="btn btn-primary" href="#contact" onClick={handleLinkClick}>Contact Us</a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
