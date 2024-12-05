import React, { useRef } from "react";
import "../Css Styles/Programs.css";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Programs() {
    const upVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const downVariant = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };


    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <div className="container" ref={ref} id="programs">
            <h4 className="our-program">Our Programs</h4> <br></br>

            <div className="row g-4">
                <div className="col-xl-3 col-lg-6 col-md-6">
                    <motion.div className=" program-card shadow-none p-3 mb-5 bg-body-tertiary rounded Best-Courses" variants={upVariant} initial="hidden" animate={isInView ? "visible" : "hidden"} >
                        <div className="overlay overlay-programs">
                        <img width="50" height="50" src="https://img.icons8.com/dotty/80/FFFFFF/trophy.png" alt="trophy"/>
                        &nbsp;    <h5 className="card-title">Best Courses</h5>
                        </div>
                    </motion.div>
                </div>


                <div className=" col-xl-3  col-lg-6 col-md-6">
                    <motion.div className=" program-card shadow-none p-3 mb-5 bg-body-tertiary rounded Certificates" variants={downVariant} initial="hidden" animate={isInView ? "visible" : "hidden"} >
                        <div className="overlay overlay-programs">
                        <img   width="60" height="60" src="https://img.icons8.com/carbon-copy/100/FFFFFF/gold-medal.png" alt="gold-medal"/>
                            <h5 className="card-title">High Certificates</h5>
                        </div>
                    </motion.div>
                </div>

                <div className="col-xl-3  col-lg-6 col-md-6">
                    <motion.div className=" program-card shadow-none p-3 mb-5 bg-body-tertiary rounded Tutorials" variants={upVariant} initial="hidden" animate={isInView ? "visible" : "hidden"}> 
                        <div className="overlay overlay-programs">
                        <img width="40" height="40" src="https://img.icons8.com/ios/50/FFFFFF/laptop-coding.png" alt="laptop-coding"/>
                        &nbsp;&nbsp;  <h5 className="card-title">Programming Tutorials</h5>
                        </div>
                    </motion.div>
                </div>


                <div className="col-xl-3  col-lg-6 col-md-6">
                    <motion.div className="program-card shadow-none p-3 mb-5 bg-body-tertiary rounded  Paid-Content " variants={downVariant} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                        <div className="overlay overlay-programs">
                        <img   width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/bounced-check.png" alt="bounced-check"/>
                        &nbsp;&nbsp; <h5 className="card-title ">Free & Paid Content</h5>
                        </div>
                    </motion.div>
                </div>


            </div>
        </div>
    );
}

export default Programs;
