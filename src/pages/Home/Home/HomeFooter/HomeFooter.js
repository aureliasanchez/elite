import React from 'react';
import { Link } from 'react-router-dom';

const HomeFooter = () => {
    return (
        <>
            <footer>
                <div className="footer-top primary-bg pt-115 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-8">
                                <div className="footer-contact-info mb-30">
                                    <div className="emmergency-call fix">
                                        {/*<div className="emmergency-call-icon f-left">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                         <div className="emmergency-call-text f-left">
                                            <h6>Emergency number</h6>
                                            <span>202-555-0104</span>
                                        </div> */}
                                    </div>
                                    <div className="footer-logo mb-35">
                                        <Link to="/"><img src="img/logo/footer-logo.jpeg" alt=""/></Link>
                                    </div>
                                    <div className="footer-contact-content mb-25">
                                        <p>Nos especializamos en ofrecer tratamientos personalizados que mejoran la estética facial y corporal de nuestros pacientes, utilizando tecnología de vanguardia y un enfoque ético y profesional. Nuestro compromiso es ayudar a nuestros pacientes a alcanzar sus metas estéticas con seguridad y confianza.</p>
                                    </div>
                                    <div className="footer-emailing">
                                        <ul>
                                            <li><i className="far fa-envelope"></i>info@eliteesthetic.com.mx</li>
                                            <li><i className="far fa-phone"></i>+52 (771) 123 4567</li>
                                            <li><i className="far fa-flag"></i>Viaducto Rojo Gomez 118, Colonia Céspedes, Pachuca Hidalgo, C.P. 42090, México</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                <div className="footer-widget mb-30">
                                    <div className="footer-title">
                                        <h3>Secciones Importantes</h3>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/servicesDetails">Políticas de Privacidad</Link></li>
                                            <li><Link to="/servicesDetails">Términos de Uso</Link></li>
                                            <li><Link to="/servicesDetails">Aviso de Privacidad</Link></li>
                                            {/* <li><Link to="/servicesDetails">Optician</Link></li>
                                            <li><Link to="/servicesDetails">Pediatrics</Link></li>
                                            <li><Link to="/servicesDetails">Dermatology</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-lg-3 d-md-none d-lg-block">
                                <div className="footer-widget mb-30">
                                    <div className="footer-title">
                                        <h3>Enlaces Rápidos</h3>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/home">Inicio</Link></li>
                                            <li><Link to="/services">Servicios</Link></li>
                                            <li><Link to="/doctors">Equipo</Link></li>
                                            <li><Link to="/blogs">Blog</Link></li>
                                            <li><Link to="/about">Acerca de</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom pt-25 pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer-copyright text-center">
                                    <p className="white-color">Copyright by@ Elite Estethic</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default HomeFooter;