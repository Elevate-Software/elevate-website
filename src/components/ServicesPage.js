import React from 'react'
import '../App.css';
import { Button } from './Button';
import './ServicesPage.css';
import Navbar from './Navbar';

function ServicesContent() {
    return (
        <div className='services-content'>
            <div className='container'>
            <div className="row justify-content-center services-content-container">
                    <div className="col-12 col-lg-6">
                        <h1>Our Services</h1>
                        <p>The Elevate Team continues to develop powerful, stable, and ground-breaking applications for our clients.</p>
                        
                        <div className="d-flex">
                            <div className="hero-button">

                                <div className="btn btn-primary btn-lg px-5 btns"
                                    onClick={() => {
                                        window.open("", "_blank")
                                    }}
                                >Our Services 
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-6">
                        <img className="dev-image" src={require('./content/images/DevImage.svg').default} alt="Elevate" />               
                    </div>                  
                </div>
                
                
            </div> 
        </div>
    )
}

export default ServicesContent

