import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import ServicesDetailsArea from './ServicesDetailsArea/ServicesDetailsArea';

const ServicesDetails = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Nuestros Servicios" subtitle="Detalles" />
            <ServicesDetailsArea/>
            <Footer/>
        </>
    );
};

export default ServicesDetails;