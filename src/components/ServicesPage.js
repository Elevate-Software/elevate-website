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
                        <img className="services-image-left" src={require('./content/images/services-wordpress.png').default} alt="Elevate" />               
                    </div>  
                    <div className="col-12 col-lg-6 my-auto">
                        <h1>Wordpress sites and plugins</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed morbi habitant laoreet dui, aliquet nibh placerat. Semper quam magna elementum vitae turpis id. Tincidunt mattis quam morbi enim eget. Pulvinar quis pharetra, scelerisque in. Platea vestibulum, felis leo congue urna. Ornare id augue dolor pulvinar ut.</p>
                        
                        <div className="d-flex">
                            <div className="hero-button">

                                <div className="btn btn-primary btn-lg px-5 btns"
                                    onClick={() => {
                                        window.open("", "_blank")
                                    }}
                                >Get This Service 
                                </div>
                            </div>
                        </div>

                    </div>                
                </div>                
                <div className="row justify-content-center services-content-container">
                    <div className="col-12 col-lg-6 my-auto">
                        <h1>React Apps</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed morbi habitant laoreet dui, aliquet nibh placerat. Semper quam magna elementum vitae turpis id. Tincidunt mattis quam morbi enim eget. Pulvinar quis pharetra, scelerisque in. Platea vestibulum, felis leo congue urna. Ornare id augue dolor pulvinar ut.</p>
                        
                        <div className="d-flex">
                            <div className="hero-button">

                                <div className="btn btn-primary btn-lg px-5 btns"
                                    onClick={() => {
                                        window.open("", "_blank")
                                    }}
                                >Get This Service 
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-6">
                        <img className="services-image-right" src={require('./content/images/services-reactapps.png').default} alt="Elevate" />               
                    </div>                  
                </div>
                <div className="row justify-content-center services-content-container">
                    <div className="col-12 col-lg-6">
                        <img className="services-image-left" src={require('./content/images/services-cloudapps.png').default} alt="Elevate" />               
                    </div>  
                    <div className="col-12 col-lg-6 my-auto">
                        <h1>Cloud Apps</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed morbi habitant laoreet dui, aliquet nibh placerat. Semper quam magna elementum vitae turpis id. Tincidunt mattis quam morbi enim eget. Pulvinar quis pharetra, scelerisque in. Platea vestibulum, felis leo congue urna. Ornare id augue dolor pulvinar ut.</p>
                        
                        <div className="d-flex">
                            <div className="hero-button">

                                <div className="btn btn-primary btn-lg px-5 btns"
                                    onClick={() => {
                                        window.open("", "_blank")
                                    }}
                                >Get This Service
                                </div>
                            </div>
                        </div>

                    </div>                
                </div>
                <div className="row justify-content-center services-content-container">
                    <div className="col-12 col-lg-6 my-auto">
                        <h1>Mobile Apps</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed morbi habitant laoreet dui, aliquet nibh placerat. Semper quam magna elementum vitae turpis id. Tincidunt mattis quam morbi enim eget. Pulvinar quis pharetra, scelerisque in. Platea vestibulum, felis leo congue urna. Ornare id augue dolor pulvinar ut.</p>
                        
                        <div className="d-flex">
                            <div className="hero-button">

                                <div className="btn btn-primary btn-lg px-5 btns"
                                    onClick={() => {
                                        window.open("", "_blank")
                                    }}
                                >Get This Service
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-6">
                        <img className="services-image-right" src={require('./content/images/services-mobileapps.png').default} alt="Elevate" />               
                    </div>                  
                </div>                
                <div className="row justify-content-center services-content-container">
                    <div className="col-12 col-lg-6">
                        <img className="services-image-left" src={require('./content/images/services-gentechsolutions.png').default} alt="Elevate" />               
                    </div>  
                    <div className="col-12 col-lg-6 my-auto">
                        <h1>General Tech Solution</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed morbi habitant laoreet dui, aliquet nibh placerat. Semper quam magna elementum vitae turpis id. Tincidunt mattis quam morbi enim eget. Pulvinar quis pharetra, scelerisque in. Platea vestibulum, felis leo congue urna. Ornare id augue dolor pulvinar ut.</p>
                        
                        <div className="d-flex">
                            <div className="hero-button">

                                <div className="btn btn-primary btn-lg px-5 btns"
                                    onClick={() => {
                                        window.open("", "_blank")
                                    }}
                                >Get This Service
                                </div>
                            </div>
                        </div>

                    </div>                
                </div>
                <div className="row justify-content-center services-content-container">
                    <div className="col-12 col-lg-6 my-auto">
                        <h1>Windows Services</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed morbi habitant laoreet dui, aliquet nibh placerat. Semper quam magna elementum vitae turpis id. Tincidunt mattis quam morbi enim eget. Pulvinar quis pharetra, scelerisque in. Platea vestibulum, felis leo congue urna. Ornare id augue dolor pulvinar ut.</p>
                        
                        <div className="d-flex">
                            <div className="hero-button">

                                <div className="btn btn-primary btn-lg px-5 btns"
                                    onClick={() => {
                                        window.open("", "_blank")
                                    }}
                                >Get This Service
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-6">
                        <img className="services-image-right" src={require('./content/images/services-windows.png').default} alt="Elevate" />               
                    </div>                  
                </div>
                <div className="row justify-content-center services-content-container">
                    <div className="col-12 col-lg-6">
                        <img className="services-image-left" src={require('./content/images/services-automation.png').default} alt="Elevate" />               
                    </div>  
                    <div className="col-12 col-lg-6 my-auto">
                        <h1>Automation</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed morbi habitant laoreet dui, aliquet nibh placerat. Semper quam magna elementum vitae turpis id. Tincidunt mattis quam morbi enim eget. Pulvinar quis pharetra, scelerisque in. Platea vestibulum, felis leo congue urna. Ornare id augue dolor pulvinar ut.</p>
                        
                        <div className="d-flex">
                            <div className="hero-button">

                                <div className="btn btn-primary btn-lg px-5 btns"
                                    onClick={() => {
                                        window.open("", "_blank")
                                    }}
                                >Get This Service
                                </div>
                            </div>
                        </div>
                    </div>                 
                </div>                
            </div> 
        </div>
    )
}

export default ServicesContent

