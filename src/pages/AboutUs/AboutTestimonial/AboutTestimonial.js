import React from 'react';

const AboutTestimonial = () => {
   return (
      <>
         <div className="testimonials-area pt-115 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                     <div className="section-title text-center pos-rel mb-40">
                        {/* <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                        </div> */}
                        <div className="section-text pos-rel">
                           <h5>Testimonios</h5>
                           <h1>Lo que los clientes dicen de nosotros</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="single-testi">
                  <div className="row">
                     <div className="col-xl-10 offset-xl-1 col-lg-12 col-md-12">
                        <div className="testi-box text-center pos-rel">
                           <div className="testi-content pos-rel">
                              <div className="testi-bg-icon">
                                 <img src="img/testimonials/testi-box-bg.png" alt=""/>
                              </div>
                              <div className="testi-quato-icon">
                                 <img src="img/testimonials/testi-quato-icon.png" alt=""/>
                              </div>
                              <div className="text-text-boxx">
                                 <p>Mi experiencia en Elite Esthetic fue excepcional. Desde la consulta inicial hasta el seguimiento postoperatorio, me sentí escuchada y cuidada en todo momento. El resultado de mi procedimiento superó mis expectativas, y estoy agradecida por la profesionalidad y el compromiso del equipo.</p>
                              </div>
                              <span></span>
                           </div>
                           <div className="testi-author">
                              <h2 className="testi-author-title">María S.</h2>
                              <span className="testi-author-desination">Clienta de Elite Esthetic</span>
                           </div>
                           <div className="test-author-icon">
                              <img src="img/testimonials/testi-author-icon.png" alt=""/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AboutTestimonial;