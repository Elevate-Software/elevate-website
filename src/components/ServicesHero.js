import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Hero.css';
import Navbar from './Navbar';

function ServicesHero() {
    return (
        <div className='hero'>
            <div className='container'>
            <Navbar />
            <div className="row justify-content-center hero-container">
                    <div className="col-12 col-lg-7">
                        <h1>Our Services</h1>
                        <p>Home | Services</p>
                        
                        <div className="d-flex">
                            <div className="hero-button">

                                <div className="btn btn-primary btn-lg px-5 btns"
                                    onClick={() => {
                                        window.open("", "_blank")
                                    }}
                                >Our Services 
                                </div>
                                <div className="btn btn-secondary btn-lg px-5 btns"
                                    onClick={() => {
                                        window.open("", "_blank")
                                    }}
                                >Get Quotes
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-5">
                        <img className="dev-image" src={require('./content/images/DevImage.svg').default} alt="Elevate" />               
                    </div>                  
                </div>
                
                
            </div> 
        </div>
    )
}

export default ServicesHero

