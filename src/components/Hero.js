import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Hero.css';


function Hero() {
    return (
        <div className='hero'>
            <div className='container'>

                <div className="d-flex hero-container align-items-center row">
                    <div className="hero-text col-sm-7">

                        <h4 className="mb-0">We are a Software Development Tech Company</h4>
                        <h1>Ultimate Tech Solution For Business Automation</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        
                        <div className="d-flex">
                            <div className="hero-button">

                                <div className="btn btn-primary btn-lg px-5"
                                    onClick={() => {
                                        window.open("", "_blank")
                                    }}
                                >Our Services 
                                </div>
                                <div className="btn btn-secondary btn-lg px-5"
                                    onClick={() => {
                                        window.open("", "_blank")
                                    }}
                                >Get Quotes
                                </div>

                            </div>
                        </div>

                    </div>
                    <div  className="hero-image col-sm-5">
                        <img className="dev-image" src={require('./content/images/DevImage.svg').default} alt="Elevate" />               
                    </div>                  
                </div>
                
                
            </div> 
        </div>
    )
}

export default Hero

