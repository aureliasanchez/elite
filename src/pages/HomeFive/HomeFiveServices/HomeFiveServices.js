import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeFiveServices = () => {
   const { SlickArrowLeft, SlickArrowRight } = useGlobalContext();
   // slick setting
   const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 300,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               arrows: false,
            }
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               arrows: false,
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
            }
         }
      ]

   };
   const servicesData = [
      {
         id: 1,
         serviceThumb: 'Rinoplastia.jpg',
         serviceTitle: 'Estética',
         serviceSubtitle: 'Rinoplastia',
         description: 'Mejora la armonía facial y corrige problemas respiratorios con nuestra rinoplastia personalizada, utilizando técnicas avanzadas y seguras que garantizan resultados naturales y duraderos.'
      },
      {
         id: 2,
         serviceThumb: 'Lifting Facial.jpg',
         serviceTitle: 'Estética',
         serviceSubtitle: 'Lifting Facial',
         description: 'Rejuvenece tu rostro eliminando los signos del envejecimiento con nuestro lifting facial, que tensa y revitaliza tu piel para un aspecto fresco, radiante y profundamente juvenil, mejorando tu confianza y bienestar general.'
      },
      {
         id: 3,
         serviceThumb: 'Implante de Glúteos.jpg',
         serviceTitle: 'Estética',
         serviceSubtitle: 'Implante de Glúteos',
         description: 'Aumenta y define tus glúteos con implantes de alta calidad, diseñados para realzar tu figura y proporcionar un contorno más firme y atractivo, logrando resultados estéticamente armoniosos y duraderos.'
      },
      {
         id: 4,
         serviceThumb: 'Liposucción de Alta Definición.jpg',
         serviceTitle: 'Estética',
         serviceSubtitle: 'Liposucción de Alta Definición',
         description: 'Moldea tu cuerpo con precisión, eliminando la grasa no deseada localizada en el abdomen para lograr un contorno esculpido que resalta tu forma natural.'
      },
      {
         id: 5,
         serviceThumb: 'Blefaroplastia Superior e Inferior.jpg',
         serviceTitle: 'Estética',
         serviceSubtitle: 'Blefaroplastia Superior e Inferior',
         description: 'Corrige los párpados caídos y elimina las bolsas debajo de los ojos para una mirada más joven y revitalizada, con resultados que realzan la expresión natural de tu rostro.'
      },
      {
         id: 6,
         serviceThumb: 'Reducción Mamaria.jpg',
         serviceTitle: 'Estética',
         serviceSubtitle: 'Reducción Mamaria',
         description: 'Alivia el malestar físico y mejora tu proporción corporal con nuestra reducción mamaria, ofreciendo resultados estéticos y funcionales que aumentan tu bienestar.'
      },
   ]
   return (
      <>
         <section className="services-area h5_services gray-bg pos-rel pt-185 pb-160">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section-title text-center pos-rel mb-75">
                        {/* <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt="" />
                        </div> */}
                        <div className="section-text pos-rel">
                           <h5>Conoce Nuestros</h5>
                           <h1>Servicios</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title.jpeg" alt="" />
                        </div> 
                     </div>
                  </div>
               </div>

               <Slider className='h4service-active h5service-active h5_services_slider' {...settings}>
   {
      servicesData.map((service, index) => {
         const { serviceThumb, serviceTitle, serviceSubtitle, description } = service;
         return (
            <div className="h4service-item" key={index}>
               <div className="h4service-box white-bg mb-30">
                  <div className="service-thumb pos-rel mb-0">
                     <img src={`img/home4/services/${serviceThumb}`} alt="" />
                     <Link className="h4services-tag black-bg white-color text-uppercase f-700"
                        to="/servicesDetails">{serviceTitle}</Link>
                  </div>
                  <div className="service-content h4services-content h6services-content">
                     <h3>{serviceSubtitle}</h3>
                     <p className="mb-20">{description}</p>
                     <div className="h5services-bottom">
                        
                     </div>
                  </div>
               </div>
            </div>
         )
      })
   }
</Slider>


            </div>
         </section>
      </>
   );
};

export default HomeFiveServices;