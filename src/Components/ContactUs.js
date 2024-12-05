import React, { useEffect } from "react";
import "../Css Styles/ContactUs.css";

function ContactUs() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.3, // Trigger when 30% of the element is visible
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                const leftSide = entry.target.querySelector('.left-side');
                const rightSide = entry.target.querySelector('.right-side');

                if (entry.isIntersecting) {
                    leftSide.classList.add('animate-left');
                    rightSide.classList.add('animate-right');
                } else {
                    leftSide.classList.remove('animate-left');
                    rightSide.classList.remove('animate-right');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const section = document.querySelector('.contact-section');
        observer.observe(section);

        return () => observer.disconnect(); // Cleanup observer on unmount
    }, []);

    return (
        <div className="contact-section" id="contact">
            <div className="container">
                <h4 className="contact">Contact Us</h4>
                <div className="row g-4">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 left-side">
                        <h5 className="contact-title">Send Your Message</h5>
                        <p className="public-info">
                            Have questions or need more information? Send us a message, and our team will get back to you as soon as possible.
                            We're here to assist you with any inquiries or support you may need. Your feedback and concerns are important to us, 
                            so feel free to reach out anytime!
                        </p>
                        <div className="shadow-none p-3 mb-5 bg-body-tertiary rounded border public-info">
                            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FA5252/email.png" alt="email" /> someone@CodeSphere.com<br />
                            <img width="24" height="24" src="https://img.icons8.com/forma-light/24/FA5252/phone.png" alt="phone" /> +2 0043555<br />
                            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FA5252/place-marker.png" alt="place-marker" /> CodeSphere
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 right-side">
                        <div className="mb-3">
                            <input required type="text" className="form-control" id="name" placeholder="Enter Your Name: Geo Mark" />
                        </div>
                        <div className="mb-3">
                            <input required type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email: name@example.com" />
                        </div>
                        <div>
                            <textarea required className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Notes"></textarea>
                        </div>
                        <div>
                            <button className="btn btn-info submit" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;

