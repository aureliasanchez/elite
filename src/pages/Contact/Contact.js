import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import ContactArea from './ContactArea/ContactArea';
import ContactMap from './ContactMap/ContactMap';

const Contact = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Sobre Nosotros" subtitle="Contacto" />
            <ContactArea/>
            <ContactMap/>
            <Footer/>
        </>
    );
};

export default Contact;