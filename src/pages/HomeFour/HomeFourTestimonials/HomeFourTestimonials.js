import React from 'react';
import HomeFourSingleTestimonial from '../../../components/HomeFourSingleTestimonial/HomeFourSingleTestimonial';

const HomeFourTestimonials = () => {
   return (
      <div className="testimonials pt-150 pb-80 h4_testimonials" data-background="img/home4/bg/testimonials-bg.jpg">
         <div className="container">
            <div className="row">
               <div className="col-xl-7 offset-xl-5 h4testi-col">
                  <div className="row">
                     <HomeFourSingleTestimonial 
                        image="1" 
                        name="Laura G." 
                        description="Estaba nerviosa antes de mi cirugía, pero el equipo me explicó cada paso y me sentí en buenas manos. Los resultados superaron mis expectativas." 
                     />
                     <HomeFourSingleTestimonial 
                        image="2" 
                        name="Carlos M." 
                        description="Buscaba una solución para corregir mi nariz. La rinoplastia fue rápida y el proceso de recuperación fue más fácil de lo que pensaba. Estoy muy contento con el resultado." 
                     />
                     <HomeFourSingleTestimonial 
                        image="3" 
                        name="Ana P." 
                        description="Me decidí por un lifting facial en Elite Esthetic y el trato fue excelente. Me gustó que el equipo siempre fue honesto y directo sobre lo que podía esperar." 
                     />
                     <HomeFourSingleTestimonial 
                        image="1" 
                        name="José R." 
                        description="La liposucción fue la mejor decisión que tomé. El equipo fue muy profesional y se preocuparon por mi bienestar en todo momento."
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeFourTestimonials;
