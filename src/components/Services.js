import React from 'react'
import './Services.css';

import { Container, Card, Row, Col } from 'react-bootstrap';

function Cards() {
    return (
        <>
            <div id="services" className="services-cards">
                <Container>
                    <Row className="text-lg-right pb-5">
                        <Col xs={12} xl={4}>
                            <div className="services-text mx-auto">
                                <div className="our-services">
                                    <span style={{color:'#3C5AE7'}}>Our</span><span style={{color:'#0F101D', fontWeight:'900'}}> Services</span>
                                </div>
                                <div className="services-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non est cons equat metus mattis vestibulum. Proin sit amet massa massa. Pellentesque fermentum. Curabitur non est cons equat metus mattis. metus mattis vestibulu massa.
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} xl={4}>
                            <Card className='services-card mx-auto'>
                                <Card.Body >   
                                <div><img className="service-image" src={require('./content/images/wordpress.svg').default} alt="Elevate"/></div>                                 
                                    <Card.Title className="services-title">Wordpress sites and plugins</Card.Title>
                                    <Card.Text style={{float:'left'}}>
                                    Wordpress is one of the world's leading content management systems for building and hosting websites as it powers almost half of the websites that are currently published to the internet. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} xl={4}>
                            <Card className='services-card mx-auto'>
                                <Card.Body>   
                                <div><img className="service-image" src={require('./content/images/react-apps.svg').default} alt="Elevate"/></div>                                 
                                    <Card.Title className="services-title">React Apps</Card.Title>
                                    <Card.Text style={{float:'left'}}>
                                    React is a javascript framework that allows developers to create seamless front end applications. With React we can create anything from a simple website to a full stack web application.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} xl={4}>
                            <Card className='services-card mx-auto'>
                                <Card.Body>   
                                <div><img className="service-image" src={require('./content/images/cloud-apps.svg').default} alt="Elevate"/></div>                                 
                                    <Card.Title className="services-title">Cloud Apps</Card.Title>
                                    <Card.Text style={{float:'left'}}>
                                    Cloud hosting is the ability to host data management and computing power remotely. When building any kind of software you need to be able to host the application on a remote cloud server.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} xl={4}>
                            <Card className='services-card mx-auto'>
                                <Card.Body>   
                                <div><img className="service-image" src={require('./content/images/mobile-apps.svg').default} alt="Elevate"/></div>                                 
                                    <Card.Title className="services-title">Mobile Apps</Card.Title>
                                    <Card.Text style={{float:'left'}}>
                                    Our team can develop seamless mobile applications to your liking. We use a framework known as React native which allows us to develop for both iOS and android with one codebase.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} xl={4}>
                            <Card className='services-card mx-auto'>
                                <Card.Body>   
                                <div><img className="service-image" src={require('./content/images/general-tech-solutions.svg').default} alt="Elevate"/></div>                                 
                                    <Card.Title className="services-title">General Tech Solutions</Card.Title>
                                    <Card.Text style={{float:'left'}}>
                                    One of our more popular services is creating automated pieces of software such as automated trading bots, interactive telegram bots, or any process that can be automated with a program.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} xl={4}>
                            <Card className='services-card mx-auto'>
                                <Card.Body>   
                                <div><img className="service-image" src={require('./content/images/windows-services.svg').default} alt="Elevate"/></div>                                 
                                    <Card.Title className="services-title">Windows Services</Card.Title>
                                    <Card.Text style={{float:'left'}}>
                                    A windows service is a computer program that runs in the background of Windows and can be used to implement background automation for computers running windows OS.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} xl={4}>
                            <Card className='services-card mx-auto'>
                                <Card.Body>   
                                <div><img className="service-image" src={require('./content/images/automation.svg').default} alt="Elevate"/></div>                                 
                                    <Card.Title className="services-title">Automation</Card.Title>
                                    <Card.Text style={{float:'left'}}>
                                    One of our more popular services is creating automated pieces of software such as automated trading bots, interactive telegram bots, or any process that can be automated with a program. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} xl={4} className="my-auto">
                            <div className="services-contact mx-auto ">
                                <div className="need-help">
                                    Need Help?
                                </div>
                                <div className="btn btn-primary btn-sm px-3"
                                        onClick={() => {
                                            window.open("", "_blank")
                                        }}
                                    >Contact Us
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Cards