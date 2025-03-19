import React from 'react';
import HomeSIngleService from '../../../../components/HomeSIngleService/HomeSIngleService';

const ServicesOneABout = () => {
    return (
        <>
          <section className="about-area pt-120 pb-90">
             <div className="container">
                <div className="row ">
                   <div className="col-xl-6 col-lg-6 col-md-12">
                      <div className="section-title section-title-m-0 pos-rel mb-50 text-end">
                         <div className="section-icon">
                            <img className="section-back-icon back-icon-right"  alt=""/>
                         </div>
                         <div className="section-text section-text-small pos-rel">
                            <h5>Tu bienestar es nuestra prioridad.</h5>
                            <h1>Atención Integral en Cada Detalle</h1>
                         </div>
                      </div>
                   </div>
                   <div className="col-xl-6 col-lg-6 col-md-12">
                      <div className="facalty-text mb-50">
                         <p>En Elite Esthetic, nos preocupamos por ofrecerte una atención integral que se adapta a tus necesidades. Nuestro compromiso es brindarte un cuidado excepcional, asegurando que cada paso de tu tratamiento sea cómodo, seguro y efectivo, sin importar dónde te encuentres.</p>
                      </div>
                   </div>
                </div>
                <div className="row">
                <HomeSIngleService icon="Botox" title="Botox" description="Elimina las arrugas y líneas de expresión con tratamientos de botox que rejuvenecen tu rostro de manera rápida y efectiva."/>
                <HomeSIngleService icon="Rinoplastia" title="Rinoplastia" description="Redefine y mejora la forma de tu nariz con técnicas avanzadas de rinoplastia, obteniendo un perfil armónico y natural." />
                <HomeSIngleService icon="Lifting Facial" title="Lifting Facial" description="Rejuvenece tu apariencia con un lifting facial que tensa y revitaliza la piel, borrando los signos de envejecimiento."  />
                <HomeSIngleService icon="Reducción Mamaria" title="Reducción Mamaria" description="Reduce el tamaño de tus senos para lograr un equilibrio corporal, aliviando molestias físicas y mejorando tu calidad de vida." />
                <HomeSIngleService icon="Implante de Pantorrilla" title="Implante de Pantorrilla" description="Aumenta el volumen y la definición de tus pantorrillas con implantes que proporcionan una apariencia más atlética y equilibrada."/>
                <HomeSIngleService icon="Blefaroplastia Superior e Inferior" title="Blefaroplastia Inferior y Superior" description="Rejuvenece tu mirada eliminando el exceso de piel y las bolsas en los párpados, obteniendo un aspecto más fresco." />
                <HomeSIngleService icon="Rellenos con Ácido Hialurónico" title="Rellenos con Ácido Hialurónico" description="Restaura el volumen perdido y mejora la hidratación de la piel con rellenos que suavizan las arrugas y realzan los rasgos." />
                <HomeSIngleService icon="Implante de Glúteos" title="Implante de Glúteos" description="Realza y define tus glúteos con implantes que están diseñados para mejorar la forma y volumen de manera natural." />
                <HomeSIngleService icon="Implante de Mamas" title="Implante de Mamas" description="Aumenta el tamaño y mejora la forma de tus senos con implantes personalizados que se adaptan a tus necesidades." />
                <HomeSIngleService icon="Corrección de Ginecomastia" title="Corrección de Ginecomastia" description=" Corrige el exceso de tejido mamario en hombres, logrando un pecho más firme y contorneado."  />
                <HomeSIngleService icon="Implante de Mentón" title="Implante de Mentón" description="Mejora la proyección y definición del mentón para equilibrar las proporciones faciales." />
                <HomeSIngleService icon="Levantamiento de Mama" title="Levantamiento de Mama" description="Levanta y reafirma tus senos para devolverles una forma juvenil y atractiva." />
                <HomeSIngleService icon="Braquioplastia" title="Braquioplastia" description="Elimina el exceso de piel en los brazos, logrando un contorno más firme y definido."  />
                <HomeSIngleService icon="Bichectomía" title="Bichectomía" description="Afina tu rostro eliminando las bolsas de grasa en las mejillas para una apariencia más esculpida y juvenil." />
                <HomeSIngleService icon="Otoplastia" title="Otoplastia" description="Corrige la forma y posición de las orejas, obteniendo una apariencia más simétrica y armoniosa." />
                <HomeSIngleService icon="Liposucción de Papada" title="Liposucción de Papada" description="Elimina el exceso de grasa en la papada, definiendo la línea de la mandíbula y mejorando el perfil facial." />
                <HomeSIngleService icon="Lipoinyección Glútea" title="Lipoinyección Glútea" description="Moldea y aumenta el volumen de los glúteos utilizando tu propia grasa, logrando resultados naturales y duraderos." />
                <HomeSIngleService icon="Liposucción de Brazos, Espalda, Contorno Corporal, Abdomen, Muslos y HD" title="Liposucción de Brazos, Espalda, Contorno Corporal, Abdomen, Muslos y HD"  />

                </div>
             </div>
          </section>
        </>
    );
};

export default ServicesOneABout;