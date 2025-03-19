import React from 'react';
import { Link } from 'react-router-dom';
import HomeTwoSingleAbout from '../../../../components/HomeTwoSingleAbout/HomeTwoSingleAbout';


const HomeAboutArea = () => {
   return (
      <>
         <section className="about-area about-area-mid pt-120 pb-90">
            <div className="container">
               <div className="row">
               <div className="col-xl-6 col-lg-12 col-md-12">
    <div className="row">
        <HomeTwoSingleAbout 
            icon="1" 
            title="Rinoplastia Especializada" 
            spacing="b-40" 
            description="Realizamos rinoplastias con precisión para mejorar la estética y funcionalidad." 
        />
        <HomeTwoSingleAbout 
            icon="2" 
            title="Lifting Facial" 
            spacing="t-40" 
            description="Rejuvenece tu rostro con nuestras técnicas avanzadas de lifting facial." 
        />
        <HomeTwoSingleAbout 
            icon="3" 
            title="Liposucción de Alta Definición" 
            spacing="b-30" 
            description="Remodela tu cuerpo con nuestra tecnología de liposucción de alta definición." 
        />
        <HomeTwoSingleAbout 
            icon="4" 
            title="Implante de Glúteos" 
            spacing="t-40 mb-30" 
            description="Obtén la forma deseada con nuestros implantes de glúteos de alta calidad." 
        />
    </div>
</div>


                  <div className="col-xl-6 col-lg-12 col-md-11">
                     <div className="about-right-side pt-25 mb-30">
                        <div className="about-title mb-20">
                           <h5 className="yellow-color">Acerca de</h5>
                           <h1>Tu Salud y Belleza en Manos de Expertos</h1>
                        </div>
                        <div className="about-text">
                           <p>Desde 2018, en Elite Esthetic nos hemos comprometido a mejorar la calidad de vida de nuestros pacientes a través de tratamientos de medicina y cirugía estética personalizados. Con un enfoque en la ética, el profesionalismo y la innovación, nos esforzamos por ofrecer resultados que no solo transformen tu apariencia, sino que también refuercen tu confianza.</p><br/>
                        </div>
                        <div className="about-text-list mb-40">
                           <ul>
                              <li><i className="fa fa-check"></i><span><b>Tecnología de Vanguardia:</b>  Utilizamos equipos y técnicas avanzadas para garantizar los mejores resultados estéticos.</span></li>
                              <li><i className="fa fa-check"></i><span><b>Atención Personalizada:</b>  Cada tratamiento se adapta a tus necesidades individuales, con un seguimiento continuo para asegurar tu bienestar.</span></li>
                              <li><i className="fa fa-check"></i><span><b>Expertos Certificados:</b>  Nuestro equipo está compuesto por profesionales altamente capacitados y con experiencia en las últimas tendencias de la medicina estética.</span></li>
                           </ul>
                        </div>
                        <div className="button-area">
                           <Link to="/services" className="primary_btn btn-icon ml-0"><span>+</span>Conoce Todos Nuestros Servicios</Link>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeAboutArea;