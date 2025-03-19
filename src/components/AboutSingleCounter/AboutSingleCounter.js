import React from 'react';
import CountUp from 'react-countup';

const AboutSingleCounter = ({ icon, counter, title, description }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="single-couter mb-30">
                    <img src={`img/counter/counter-icon-${icon}.png`} alt="" />
                    <div className="counter-text-box">
                        <h1><span className="counter"><CountUp end={counter} duration={8} /></span>+</h1>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSingleCounter;
