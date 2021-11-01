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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed morbi habitant laoreet dui, aliquet nibh placerat. Semper quam magna elementum vitae turpis id. Tincidunt mattis quam morbi enim eget. Pulvinar quis pharetra, scelerisque in. Platea vestibulum, felis leo congue urna. Ornare id augue dolor pulvinar ut.</p>
                        
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

