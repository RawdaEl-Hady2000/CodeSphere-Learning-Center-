import React from "react";
import "../Css Styles/Footer.css";

function Footer(){
    return(
        <>
      <footer className="footer"> 
      <div className="container">
        <div className="row text-center text-md-center">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <p className=" mb-md-0">
              <a href="#terms" className="text-white text-decoration-none">Terms of Service</a> |{" "}
              <a href="#privacy" className="text-white text-decoration-none">Privacy Policy</a>
            </p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-md-center">
            <span className="d-block">
              All Rights Reserved &copy; Rawda Elsawaf 2024
            </span>
          </div>
        </div>
      </div>
      </footer>
        </>
    )
}
export default Footer;