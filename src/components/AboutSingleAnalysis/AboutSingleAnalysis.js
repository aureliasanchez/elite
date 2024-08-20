import React from 'react';
import { Link } from 'react-router-dom';

const AboutSingleAnalysis = ({ title, paragraph, image }) => {
    return (
        <>
            <div className="row">
                <div className="col-xl-6 col-lg-8">
                    <div className="section-title pos-rel mb-40">
                        <div className="section-text section-text-white section-text-green pos-rel">
                            <h5>{title}</h5>
                            <p>{paragraph}</p>
                        </div>
                    </div>
                    <div className="section-button section-button-left mb-30">
                        <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>Reserva tu cita ahora</Link>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-4">
                    <div className="analysis-chart mb-30">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSingleAnalysis;
