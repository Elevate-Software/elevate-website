import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Services from '../Services';
import Team from '../Cards';
import Hire from '../Hire';
import Crypto from '../Crypto';
import Footer from '../Footer';

function Home () {
    return (
        <>
            <Hero />
            <Services/>
            <Team />
            <Hire />
            <Crypto />
            <Footer/>
        </>
    )
}

export default Home;