import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Services from '../Services';
import Team from '../Cards';
import Footer from '../Footer';

function Home () {
    return (
        <>
            <Hero />
            <Services/>
            <Team />
            <Footer/>
        </>
    )
}

export default Home;