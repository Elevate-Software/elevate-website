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
                    <div className="col-12 col-lg-7">

                        <h4>We are a Software Development Tech Company</h4>
                        <h1>Ultimate Tech Solution For Business Automation</h1>
                        <p>Viverra aliquet eget sit amet tellus cras adipiscing enim. Est velit egestas dui ornare arcu odio tri stique senectus netus et malesuada pellent.</p>
                        
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

export default Hero

