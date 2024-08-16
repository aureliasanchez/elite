import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../../../components/Shared/Sidebar/Sidebar';
import useGlobalContext from '../../../../hooks/useGlobalContext';

const HomeHeader = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   return (
      <>
         <header>
            <div className="top-bar d-none d-md-block">
               <div className="container">
                  <div className="row d-flex align-items-center">
                     <div className="col-xl-6 offset-xl-1 col-lg-6 offset-lg-1 col-md-7 offset-md-1">
                        <div className="header-info">
                           <span><i className="fas fa-phone"></i> +52 771 747 7611</span>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-5 col-md-4">
                        <div className="header-top-right-btn f-right">
                           <Link to="/contact" className="primary_btn">Hacer una cita</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className={stickyMenu ? "header-menu-area sticky_menu" : "header-menu-area"}>
               <div className="container menu_wrapper">
                  <div className="row align-items-center">
                     <div className="col-xl-3 col-lg-3 col-md-6 col-6 d-flex align-items-center">
                           <Link to="/"><img src="img/logo/logo.jpeg" alt="" /></Link>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-6 col-6">
                        <div className="header-right f-right">
                           <div className="header-social-icons f-right d-none d-xl-block">
                              <ul>
                                 <li><a href="https://www.facebook.com/Dr.Tadeomorenoestetica/?locale=es_LA"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="https://www.instagram.com/drtadeomoreno/"><i className="fab fa-instagram"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div className="header__menu f-right">
                           <nav id="mobile-menu">
                              <ul>
                                 <li><Link to="/">Inicio</Link>
                                 
                                 </li>
                                 <li><Link to="/services">Servicios</Link>
                                 </li>
                                 <li><Link to="/doctors">Equipo</Link>
                                 </li>
                                 <li><Link to="/blogs">Blog</Link>
                                 </li>
                                 <li><a href="#">Acerca de +</a>
                                    <ul className="submenu">
                                       <li><Link to="/about">About</Link></li>
                                       <li><Link to="/appoinment">Citas</Link></li>
                                       <li><Link to="/portfolioThreeColumn">Portafolio</Link></li>
                                       <li><Link to="/contact">Contacto</Link></li>
                                    </ul>
                                 </li> 
                              </ul>
                           </nav>
                        </div>

                        <div className="side-menu-icon d-lg-none text-end">
                           <button onClick={handleShow} className="side-toggle border-0 bg-transparent">
                              <i className="fas fa-bars"></i> </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default HomeHeader;