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
                     title="Ejemplo 1" 
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                  />
                  <SingleCount 
                     icon="certificado" 
                     // counter="899" 
                     title="Ejemplo 2" 
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                  />
                  <SingleCount 
                     icon="revista" 
                     // counter="100" 
                     title="Ejemplo 3" 
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                  />
               </div>
            </div>
         </section>
      </>
   );
};

export default CounterArea;
