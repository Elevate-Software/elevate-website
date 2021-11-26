import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import ServicesHero from '../ServicesHero'
import ServicesContent from '../ServicesPage'
import Experience from '../Experience'

function Services() {
    return (
        <>
            <ServicesHero />
            <ServicesContent />
            <Experience />
            <Footer />
        </>
    )
}

export default Services