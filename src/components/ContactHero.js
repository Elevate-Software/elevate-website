import React from 'react'
import '../App.css';
import { Button } from './Button';
import './ContactHero.css';
import Navbar from './Navbar';

function ServicesHero() {
    return (
        <div className='hero'>
            <div className='container'>
                <Navbar />
                <div className="row justify-content-center hero-container">
                    <div className="col-12 col-lg-7 my-auto">
                        <h1>Contact Us</h1>
                        <p>Home | Contact Us</p>
                    </div>
                    <div className="col-12 col-lg-5">
                        <img className="contact-image" src={require('./content/images/contact-image.png').default} alt="Elevate" />               
                    </div>                  
                </div>
                
                
            </div> 
        </div>
    )
}

export default ServicesHero

