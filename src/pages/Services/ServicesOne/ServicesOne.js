import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import ServicesOneABout from './ServicesOneAbout/ServicesOneABout';

const ServicesOne = () => {
   return (
      <>
         <HomeHeader/>
         <CommonPageHeader title="Nuestros Servicios" subtitle="Tratamientos" />
         <ServicesOneABout/>
         <Footer/>
      </>
   );
};

export default ServicesOne;