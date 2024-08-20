import React from 'react';
import SingleCount from '../../../../components/SingleCount/SingleCount';

const CounterArea = () => {
   return (
      <>
         <section className="about-area pt-120 pb-80">
            <div className="container">
               <div className="row">
                  <SingleCount 
                     icon="premio" 
                     // counter="540" 
                     title="Premio Nacional de Cirugía Estética (2021)" 
                     description="Reconocimiento por su contribución en el desarrollo de técnicas avanzadas de lifting facial." 
                  />
                  <SingleCount 
                     icon="certificado" 
                     // counter="899" 
                     title="Certificación Internacional en Medicina Estética" 
                     description="Avalado por la Asociación Internacional de Cirujanos Estéticos (AICAE)." 
                  />
                  <SingleCount 
                     icon="revista" 
                     // counter="100" 
                     title="Publicación en Revista Médica (2020)" 
                     description="Autor de varios artículos sobre las últimas tendencias en rinoplastia y liposucción." 
                  />
               </div>
            </div>
         </section>
      </>
   );
};

export default CounterArea;
