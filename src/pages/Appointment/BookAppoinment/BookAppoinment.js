import React from 'react';

const BookAppoinment = () => {
   return (
      <>
         <section className="appointment-area appointment-area-3 appointment_page_bg pos-rel pt-115 pb-120"
            data-background="img/appoinment/appointment-bg.jpg">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <div className="calculate-box white-bg">
                        <div className="calculate-content">
                           <div className="row">
                              <div className="col-xl-12">
                                 <div className="about-title news-letter-title mb-70">
                                    <h5 className="pink-color">Citas</h5>
                                    <h1>Agenda tu cita</h1>
                                 </div>
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                 <select className="form-select select_style" aria-label="Default select example">
                                    <option defaultValue={'Department'}>Especialidad</option>
                                    <option defaultValue="1">Cirugía estética</option>
                                    <option defaultValue="2">Cirugía estética</option>
                                 </select>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                 <select className="form-select select_style" aria-label="Default select example">
                                    <option defaultValue={'Doctor'}>Doctor</option>
                                    <option defaultValue="1">Dr. Jesús Tadeo Moreno Aranda.</option>
                                    <option defaultValue="2">Dr. Jesús Tadeo Moreno Aranda. 1</option>
                                 </select>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                 <select className="form-select select_style" aria-label="Default select example">
                                    <option defaultValue={'Your Name'}>Su nombre</option>
                                    <option defaultValue="1">Nombre</option>
                                    <option defaultValue="2">Apellido</option>
                                 </select>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                 <form className="calculate-form appointment-form-3 mb-20" action="#">
                                    <input type="text" placeholder="su número Teléfono"/>
                                       <i className="fas fa-phone"></i>
                                 </form>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                 <form className="calculate-form appointment-form-3 mb-20" action="#">
                                    <input type="text" placeholder="Selecciona el día"/>
                                       <i className="far fa-calendar"></i>
                                 </form>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                 <form className="calculate-form appointment-form-3 mb-20" action="#">
                                    <input type="text" placeholder="Selecciona la hora"/>
                                       <i className="far fa-clock"></i>
                                 </form>
                              </div>
                              <div className="col-xl-12">
                                 <form className="calculate-form appointment-form-3 mb-20" action="#">
                                    <textarea name="Special request" cols="30" rows="10" placeholder="Añadir información"></textarea>
                                    <i className="far fa-edit"></i>
                                 </form>
                              </div>
                           </div>
                        </div>
                        <a href="#" className="primary_btn mt-40">Agendar Cita</a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default BookAppoinment;