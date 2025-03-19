import React from 'react';
import AboutSingleCounter from '../../../components/AboutSingleCounter/AboutSingleCounter';

const AboutCounter = () => {
   return (
      <>
         <section className="counter-wraper pt-120 pb-90 gray-bg">
            <div className="container">
               <div className="row">

                  <AboutSingleCounter 
                     icon="1" 
                     counter="500" 
                     title="Pacientes Satisfechos" 
                     description="Hemos transformado la vida de más de 500 pacientes, brindando resultados excepcionales en cada tratamiento."
                  />
                  <AboutSingleCounter 
                     icon="2" 
                     counter="100" 
                     title="Tratamientos Realizados" 
                     description="Con más de 100 tratamientos especializados en medicina y cirugía estética, somos líderes en el cuidado estético en Hidalgo."
                  />
                  <AboutSingleCounter 
                     icon="3" 
                     counter="6" 
                     title="Años de Experiencia" 
                     description="Desde 2018, hemos ofrecido servicios de alta calidad, siempre a la vanguardia de la tecnología y técnicas estéticas."
                  />

               </div>
            </div>
         </section>
      </>
   );
};

export default AboutCounter;
