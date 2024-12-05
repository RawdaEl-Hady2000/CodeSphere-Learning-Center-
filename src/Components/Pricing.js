import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Css Styles/Pricing.css";

function Pricing() {
    const pricingRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
            once: false,
        });

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    AOS.refresh();
                }
            },
            { threshold: 0.2 }
        );

        if (pricingRef.current) {
            observer.observe(pricingRef.current);
        }

        return () => {
            if (pricingRef.current) {
                observer.unobserve(pricingRef.current);
            }
        };
    }, []);

    return (
        <div className="container" ref={pricingRef} id="pricing">
            <h4 className="pricing">Pricing</h4>
            <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12" data-aos="fade-up" data-aos-delay="200">
                    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded Undergrads">
                        <img width="64" height="64" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/external-student-education-icongeek26-flat-icongeek26-1.png" alt="student-icon" />
                        <h5 className="Undergrads">Undergrads</h5>
                        <p className="Limited-users">Limited users</p>
                        <h5 className="price">200$</h5>
                        <p className="amount">per device/month</p>
                        <div className="list">
                            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FA5252/1-circle.png" alt="1-circle" />You can attend flexibly by agreement with the lecturer. <br></br>
                            <img width="24" height="24" src="https://img.icons8.com/material/24/FA5252/2-circle.png" alt="2-circle" />You can attend flexibly by agreement with the lecturer.<br></br>
                            <img width="24" height="24" src="https://img.icons8.com/material/24/FA5252/3-circle.png" alt="3-circle" />You can attend flexibly by agreement with the lecturer.
                        </div>
                        <button className="btn btn-success">Subscribe</button>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12" data-aos="fade-down" data-aos-delay="300">
                    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded Postgrads">
                        <img width="64" height="64" src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/external-stamp-office-icongeek26-outline-colour-icongeek26.png" alt="postgrad-icon" />
                        <h5 className="Postgrads">Postgrads</h5>
                        <p className="Limited-users">Limited users</p>
                        <h5 className="price">450$</h5>
                        <p className="amount">per device/month</p>
                        <div className="list">
                            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FA5252/1-circle.png" alt="1-circle" />You can attend flexibly by agreement with the lecturer. <br></br>
                            <img width="24" height="24" src="https://img.icons8.com/material/24/FA5252/2-circle.png" alt="2-circle" />You can attend flexibly by agreement with the lecturer.<br></br>
                            <img width="24" height="24" src="https://img.icons8.com/material/24/FA5252/3-circle.png" alt="3-circle" />You can attend flexibly by agreement with the lecturer.
                        </div>
                        <button className="btn btn-success">Subscribe</button>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12" data-aos="fade-up" data-aos-delay="400">
                    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded Companies">
                        <img width="64" height="64" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/external-interview-office-icongeek26-flat-icongeek26.png" alt="companies-icon" />
                        <h5 className="Companies">Companies</h5>
                        <p className="Limited-users">Limited users</p>
                        <h5 className="price">800$</h5>
                        <p className="amount">per device/month</p>
                        <div className="list">
                            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FA5252/1-circle.png" alt="1-circle" />You can attend flexibly by agreement with the lecturer. <br></br>
                            <img width="24" height="24" src="https://img.icons8.com/material/24/FA5252/2-circle.png" alt="2-circle" />You can attend flexibly by agreement with the lecturer.<br></br>
                            <img width="24" height="24" src="https://img.icons8.com/material/24/FA5252/3-circle.png" alt="3-circle" />You can attend flexibly by agreement with the lecturer.
                        </div>
                        <button className="btn btn-success">Subscribe</button>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12" data-aos="fade-down" data-aos-delay="500">
                    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded PRO">
                        <img width="64" height="64" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-premium-e-commerce-flaticons-flat-flat-icons.png" alt="pro-icon" />
                        <h5 className="PRO-title">PRO</h5>
                        <p className="Limited-users">Limited users</p>
                        <h5 className="price">1500$</h5>
                        <p className="amount">per device/month</p>
                        <div className="list">
                            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FA5252/1-circle.png" alt="1-circle" />You can attend flexibly by agreement with the lecturer. <br></br>
                            <img width="24" height="24" src="https://img.icons8.com/material/24/FA5252/2-circle.png" alt="2-circle" />You can attend flexibly by agreement with the lecturer.<br></br>
                            <img width="24" height="24" src="https://img.icons8.com/material/24/FA5252/3-circle.png" alt="3-circle" />You can attend flexibly by agreement with the lecturer.
                        </div>
                        <button className="btn btn-secondary">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;

