import React from "react"
import '../Css Styles/HomePage.css';
import { motion } from "framer-motion";

const HomePage = () => {
  const h1Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.1,
      },
    },
  };

  const pVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.4,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },
  };


  return (
    <div className="homepage" id="home">
      <div className="content">

        {/* Animate the heading */}
        <motion.h1 className="title" variants={h1Variants} initial="hidden" animate="visible" >
          We ensure Better Education<br /> for a better world!
        </motion.h1>
        <br />

        {/* Animate the paragraph */}
        <motion.p variants={pVariants} initial="hidden" animate="visible" className="line-height my-4 ">
          Our cutting-edge curriculum is designed to empower students<br />
          with the knowledge, skills, and experiences needed to excel in <br />
          the dynamic field of education .
        </motion.p>

        {/* Animate the button */}
        <motion.button variants={buttonVariants} initial="hidden" animate="visible" className="btn btn-info shadow-sm" >
          Read More
        </motion.button>
      </div>
      <div className="overlay"></div>
    </div>
  );

};

export default HomePage;
