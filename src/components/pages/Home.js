import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import News from '../News';
import Team from '../Cards';
import Footer from '../Footer';

function Home () {
    return (
        <>
            <Hero />
            <News/>
            <Team />
            <Footer/>
        </>
    )
}

export default Home;