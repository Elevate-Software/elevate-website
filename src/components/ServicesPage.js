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
                        <img className="services-page-image mx-auto d-block" src={require('./content/images/services-wordpress.png').default} alt="Elevate" />               
                    </div>  
                    <div className="col-12 col-lg-6 my-auto">
                        <h1>Wordpress sites and plugins</h1>
                        <p>Have our experts build your website with one of the world’s leading content management systems on the web. Wordpress powers half of all the websites currently published on the internet.</p>
                        
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
                        <p>Reactjs is the same application used for popular sites like Facebook, Paypal, Netflix, Instagram, Asana, and more. Using Reactjs, we can create anything from a simple website to a full stack web application. Integrated with seamless and user-friendly frontend applications. </p>
                        
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
                        <img className="services-page-image mx-auto d-block" src={require('./content/images/services-reactapps.png').default} alt="Elevate" />               
                    </div>                  
                </div>
                <div className="row justify-content-center services-content-container">
                    <div className="col-12 col-lg-6">
                        <img className="services-page-image mx-auto d-block" src={require('./content/images/services-cloudapps.png').default} alt="Elevate" />               
                    </div>  
                    <div className="col-12 col-lg-6 my-auto">
                        <h1>Cloud Apps</h1>
                        <p>Our team can integrate Cloud apps, allowing you to host data management on a remote server.</p>
                        
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
                        <p>With our React native framework, our team can create mobile apps for both android and iOS.</p>
                        
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
                        <img className="services-page-image mx-auto d-block" src={require('./content/images/services-mobileapps.png').default} alt="Elevate" />               
                    </div>                  
                </div>                
                <div className="row justify-content-center services-content-container">
                    <div className="col-12 col-lg-6">
                        <img className="services-page-image mx-auto d-block" src={require('./content/images/services-gentechsolutions.png').default} alt="Elevate" />               
                    </div>  
                    <div className="col-12 col-lg-6 my-auto">
                        <h1>General Tech Solution</h1>
                        <p>From web support, to any other necessary tech solution - we’ve got you covered.</p>
                        
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
                        <p>We can use Windows OS to automate your systems and procedures, allowing you to use features like automated bots and other programs.
</p>
                        
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
                        <img className="services-page-image mx-auto d-block" src={require('./content/images/services-windows.png').default} alt="Elevate" />               
                    </div>                  
                </div>
                <div className="row justify-content-center services-content-container">
                    <div className="col-12 col-lg-6">
                        <img className="services-page-image mx-auto d-block" src={require('./content/images/services-automation.png').default} alt="Elevate" />               
                    </div>  
                    <div className="col-12 col-lg-6 my-auto">
                        <h1>Automation</h1>
                        <p>One of our more popular services; we can create automated pieces of software with any custom website or app design. Software pieces include automated crypto trading bots, interactive telegram bots and more.</p>
                        
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

