import React from 'react';
import CountUp from 'react-countup';

const SingleCount = ({ icon, counter, title, description }) => {
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-couter counter-box counter-box-white text-center mb-30">
                    <img src={`img/counter/${icon}.png`} alt=""/><br></br><br></br>
                    {/* <h1><span className="theme-color counter"><CountUp end={counter} duration={8} /></span>+</h1> */}
                    <h6 className="green-color pb-20">{title}</h6>
                    <div className="counter-text mt-10">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleCount;
