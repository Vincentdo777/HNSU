import React from 'react';
import '../../App.css';
import Cards from '../Card';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home (){
    return (
        <div>
            <HeroSection />
            <Cards />
            <Footer />
        </div>
    );
}

export default Home;