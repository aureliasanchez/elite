import React from 'react';
import HomeAboutArea from './HomeAboutArea/HomeAboutArea';
import HomeCta from './HomeCta/HomeCta';
import HomeFact from './HomeFact/HomeFact';
import HomeFooter from './HomeFooter/HomeFooter';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeHeroSection from '../../../pages/HomeTwo/HomeTwoHeader/HomeTwoHeroSection';
import HomeOurTeam from '../../../pages/HomeFive/HomeFiveTeams/HomeFiveTeams';
import HomeTestimonio from '../../../pages/HomeFour/HomeFourTestimonials/HomeFourTestimonials';
import HomeServices from '../../../pages/HomeFive/HomeFiveServices/HomeFiveServices';

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeHeroSection/>
            <HomeAboutArea/>
            <HomeServices/>
            <HomeOurTeam/>
            <HomeFact/>
            <HomeTestimonio/>
            <HomeCta/>
            <HomeFooter/>
        </>
    );
};

export default Home;