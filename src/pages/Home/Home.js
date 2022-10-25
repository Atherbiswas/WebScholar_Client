import React from 'react';
import Faq from '../Faq/Faq';
import About from '../Other/About/About';
import Banner from '../Other/Banner/Banner';
import CarouselSlide from '../Other/Carousel/CarouselSlide';
import OurTeam from '../Other/OurTeam/OurTeam';
import Footer from '../shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <CarouselSlide></CarouselSlide>
            <Banner></Banner>
            <About></About>
            <Faq></Faq>
            <OurTeam></OurTeam>
            <Footer></Footer>
        </div>
    );
};

export default Home;