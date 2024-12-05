import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Css Styles/About.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Allow animation to re-trigger on each scroll.
      offset: 200, // Trigger animation slightly before reaching the element.
      easing: "ease-in-out", // Smooth animation.
    });
  }, []);

  return (
    <div className="container py-5" id="about">
      <h4 className="text-center about-codeshere mb-4">About CodeSphere</h4>
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
          <img
            className="img-fluid img-about-codeshere rounded"
            src="https://media.istockphoto.com/id/1157345255/photo/team-of-young-computer-programmers-cooperating-in-the-office.jpg?s=612x612&w=0&k=20&c=cSDSNJSxyo0-J3DYPP9SBYrd7dxti4Todn--jHr-7pY="
            alt="About CodeSphere"
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6">
          <p data-aos="fade-left" data-aos-delay="500">
            <span className="first-stage">
              <b>CodeSphere</b> is a dynamic programming center dedicated to nurturing talent and fostering innovation in the world of technology. At CodeSphere, we empower learners and professionals with hands-on training in cutting-edge technologies, including web development, programming languages, and software engineering.
            </span>
          </p>

          <p data-aos="fade-left" data-aos-delay="800">
            <span className="second-stage">
              <b>Our mission</b> is to create a collaborative learning environment where creativity thrives, and knowledge is shared, equipping individuals with the skills they need to succeed in the ever-evolving tech industry. Whether you're a beginner or an experienced developer, CodeSphere offers a range of courses and resources designed to unlock your potential and drive your success in the digital world.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
