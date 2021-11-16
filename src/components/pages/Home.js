import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Services from '../Services';
import Experts from '../Experts'
import Hire from '../Hire';
import Crypto from '../Crypto';
import Footer from '../Footer';
import ContactForm from '../ContactUs'
import Team from '../Team'

function Home () {
    return (
        <>
            <Hero />
            <Services/>
            <Experts />
            <Team/>
            <Hire />
            <Crypto />
            <ContactForm />
            <Footer/>
        </>
    )
}

export default Home;