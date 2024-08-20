import React from 'react';
import { Link } from 'react-router-dom';

const HomeFact = () => {
   return (
      <>
         <section className="fact-area fact-map primary-bg pos-rel pt-115 pb-60">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-10">
                     <div className="section-title pos-rel mb-45">
                        <div className="section-text section-text-white pos-rel">
                           <h5>Siempre a tu disposición</h5>
                           <h1 className="white-color">Listos para Transformar Tu Vida</h1>
                        </div>
                     </div>
                     <div className="section-button section-button-left mb-30">
                        <Link to="/appoinment" className="primary_btn btn-icon ml-0"><span>+</span>Reserva Tu Cita Ahora</Link>
                     </div>
                  </div>
                  <div className="col-lg-6 col-lg-6 col-md-8">
                     <div className="cta-satisfied">
                        <div className="single-satisfied mb-50">
                           <h1>1k+</h1>
                           <h5> <i className="fas fa-user"></i> Pacientes Satisfechos</h5>
                           <p>Desde nuestra fundación en 2018, hemos transformado la vida de más de mil pacientes, brindando resultados que no solo mejoran la apariencia, sino que también elevan la confianza y bienestar de nuestros clientes.</p>
                        </div>
                        <div className="single-satisfied mb-50">
                           <h1>1K+</h1>
                           <h5><i className="far fa-thumbs-up"></i> Reconocidos a Nivel Nacional</h5>
                           <p>Elite Esthetic ha sido galardonada con múltiples premios por su excelencia en medicina estética, destacándose como un referente en el sector gracias a nuestro compromiso con la innovación y la calidad.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeFact;