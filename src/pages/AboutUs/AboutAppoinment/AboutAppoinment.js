import React from 'react';
import { Link } from 'react-router-dom';

const AboutAppoinment = () => {
   return (
      <>
         <section className="appoinment-section pt-120 pb-120" data-background="img/bg/appointment.jpg">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="appoinment-box white">
                        <div className="appoinment-content">
                           <span className="small-text">Nuestro Enfoque</span>
                           <h1>Compromiso con la Excelencia Estética</h1>
                           <p>En Elite Esthetic, nos dedicamos a proporcionar una atención personalizada y de alta calidad, enfocándonos en los detalles que marcan la diferencia en los resultados. Nuestro enfoque se basa en combinar la experiencia médica con un entendimiento profundo de las necesidades estéticas de nuestros pacientes, garantizando tratamientos que realzan su belleza natural y mejoran su bienestar general.</p>
                           <ul className="professinals-list pt-30">
                              <li>
                                 <i className="fa fa-check"></i>
                                 <b>Atención Personalizada:</b> Cada tratamiento es diseñado a la medida, considerando las necesidades y expectativas únicas de cada paciente.
                              </li>
                              <li>
                                 <i className="fa fa-check"></i>
                                 <b>Tecnología Avanzada:</b> Utilizamos las técnicas y equipos más innovadores para asegurar los mejores resultados posibles.
                              </li>
                              <li>
                                 <i className="fa fa-check"></i>
                                 <b>Seguridad y Ética:</b> Seguimos los más altos estándares de seguridad y ética en todos nuestros procedimientos.
                              </li>
                              <li>
                                 <i className="fa fa-check"></i>
                                 <b>Resultados Naturales:</b> Nos enfocamos en realzar la belleza natural de cada paciente, asegurando que los resultados sean armoniosos y equilibrados.
                              </li>
                           </ul>
                        </div>
                        <Link to="/contact" className="primary_btn mt-40">Reserva tu cita ahora</Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutAppoinment;