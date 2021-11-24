import React from 'react'
import '../App.css';
import { Button } from './Button';
import './ServicesHero.css';
import Navbar from './Navbar';

function ServicesHero() {
    return (
        <div className='hero'>
            <div className='container'>
            <Navbar />
            <div className="row justify-content-center services-hero-container">
                    <div className="col-12 col-lg-7 my-auto">
                        <h1>Our Services</h1>
                        <p>Home | Services</p>
                    </div>
                    <div className="col-12 col-lg-5">
                        <img className="services-image" src={require('./content/images/services-image.png').default} alt="Elevate" />               
                    </div>                  
                </div>
                
                
            </div> 
        </div>
    )
}

export default ServicesHero

