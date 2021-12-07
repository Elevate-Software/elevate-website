import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Hero.css';
import Navbar from './Navbar';

function Hero() {
    return (
        <div className='hero'>
            <div className='container'>
            <Navbar />
            <div className="row justify-content-center hero-container">
                    <div className="col-12 col-lg-6 my-auto">

                        <h4>We are a Software Development Tech Company</h4>
                        <h1>Ultimate Tech Solution For Business Automation</h1>
                        <p>Viverra aliquet eget sit amet tellus cras adipiscing enim. Est velit egestas dui ornare arcu odio tri stique senectus netus et malesuada pellent.</p>
                        
                        <div className="d-flex">
                            <div className="hero-button">
                                <a href="/Services">
                                    <div className="btn btn-primary btn-lg px-4 btns btn-hero">
                                        Our Services 
                                    </div>
                                </a>
                                <a href="/Contact">
                                    <div className="btn btn-secondary btn-lg px-4 btns btn-hero">
                                        Get Quotes
                                    </div>
                                </a>
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

export default Hero

