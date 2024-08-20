import React from 'react';
import AboutSingleAnalysis from '../../../components/AboutSingleAnalysis/AboutSingleAnalysis';

const AboutAnalysis = () => {
   return (
      <>
         <section className="analysis-area pos-rel theme-bg pb-90">
            {/* <div className="analysis-bg-icon">
               <img src="img/analysis/analysis-bg-icon.png" alt="" />
            </div> */}
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <ul className="nav nav-pills mb-65" id="pills-tab" role="tablist">
                        <li className="nav-item">
                           <a className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab"
                              aria-controls="pills-home" aria-selected="true">
                              <img src="img/analysis/search-icon.png" alt="" />
                              <h6>Experiencia Industrial</h6>
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" href="#pills-profile" role="tab"
                              aria-controls="pills-profile" aria-selected="false">
                              <img src="img/analysis/search-icon-2.png" alt="" />
                              <h6>Nuestro Compromiso</h6>
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" href="#pills-contact" role="tab"
                              aria-controls="pills-contact" aria-selected="false">
                              <img src="img/analysis/search-icon-3.png" alt="" />
                              <h6>¿Cómo Iniciamos la Atención?</h6>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-12">
                     <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                           <AboutSingleAnalysis 
                              title="Referentes en la Industria Estética" 
                              paragraph="Con más de 6 años de trayectoria, Elite Esthetic se ha consolidado como un líder en la industria de la medicina y cirugía estética en Hidalgo. Nuestra dedicación a la excelencia y el uso de técnicas avanzadas nos ha permitido transformar la vida de cientos de pacientes, posicionándonos como un referente en el sector."
                              image="img/analysis/industry-analysis.jpg"
                           />
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                           <AboutSingleAnalysis 
                              title="Compromiso con la Excelencia y el Bienestar"
                              paragraph="En Elite Esthetic, nos comprometemos a brindar un cuidado integral que va más allá de lo estético. Nos enfocamos en ofrecer tratamientos personalizados que no solo realzan la belleza, sino que también mejoran el bienestar emocional y físico de nuestros pacientes. Cada detalle cuenta, y por eso dedicamos tiempo y recursos para asegurarnos de que cada experiencia con nosotros sea excepcional."
                              image="img/analysis/our-commitment.jpg"
                           />
                        </div>
                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                           <AboutSingleAnalysis 
                              title="¿Cómo Comenzamos Tu Transformación?"
                              paragraph="En Elite Esthetic, el primer paso hacia tu nueva versión es una consulta personalizada. Durante esta consulta, escuchamos tus necesidades, evaluamos tus objetivos y diseñamos un plan de tratamiento a tu medida. Nuestro equipo de especialistas te guiará a lo largo de todo el proceso, asegurando que te sientas cómodo y seguro en cada etapa de tu transformación."
                              image="img/analysis/how-we-start.jpg"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutAnalysis;
