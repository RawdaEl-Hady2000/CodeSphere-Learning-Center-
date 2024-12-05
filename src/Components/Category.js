import React, { useEffect } from "react";
import '../Css Styles/Category.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS for animations

function Category() {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false,    // Whether animation happens only once or every time element enters the viewport
      mirror: true,   // Allows the animation to run again when scrolling up
    });
  }, []);

  return (
    <div className="container">
      <h4 className="our-category">Our Category</h4>
      
      {/* First Row: Appearing from the right */}
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-right">
          <div className="shadow-lg p-3 mb-3 bg-body-tertiary rounded d-flex align-items-center">
            <FontAwesomeIcon icon={faReact} size="3x" color="blue" className="me-3" />
            <span>React Js</span>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-right">
          <div className="shadow-lg p-3 mb-3 bg-body-tertiary rounded d-flex align-items-center">
            <img src="data:image/png;base64,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" alt="HTML5" />
            <span>HTML5</span>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-right">
          <div className="shadow-lg p-3 mb-3 bg-body-tertiary rounded d-flex align-items-center">
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/css3.png" alt="css3" />
            <span>CSS3</span>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-right">
          <div className="shadow-lg p-3 mb-3 bg-body-tertiary rounded d-flex align-items-center">
            <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" />
            &nbsp; <span>Javascript</span>
          </div>
        </div>
      </div>

      {/* Second Row: Appearing from the left */}
      <div className="row g-4">
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-left">
          <div className="shadow-lg p-3  bg-body-tertiary rounded d-flex align-items-center">
            <img width="48" height="48" src="https://img.icons8.com/color/48/bootstrap--v2.png" alt="bootstrap--v2" />
            &nbsp;  <span>Bootstrap</span>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-left">
          <div className="shadow-lg p-3  bg-body-tertiary rounded d-flex align-items-center">
            <img width="48" height="48" src="https://img.icons8.com/color/48/net-framework.png" alt="net-framework" />
            &nbsp;  <span>.NET</span>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-left">
          <div className="shadow-lg p-3  bg-body-tertiary rounded d-flex align-items-center">
            <img width="48" height="48" src="https://img.icons8.com/parakeet/48/php.png" alt="php" />
            &nbsp; <span>PHP</span>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-left">
          <div className="shadow-lg p-3  bg-body-tertiary rounded d-flex align-items-center">
            <img width="48" height="48" src="https://img.icons8.com/color/48/c-plus-plus-logo.png" alt="c-plus-plus-logo" />
            &nbsp;   <span>C++ </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
