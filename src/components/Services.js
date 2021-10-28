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
                                    <Card.Title>Wordpress sites and plugins</Card.Title>
                                    <Card.Text style={{float:'left'}}>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} xl={4}>
                            <Card className='services-card mx-auto'>
                                <Card.Body>   
                                <div><img className="service-image" src={require('./content/images/react-apps.svg').default} alt="Elevate"/></div>                                 
                                    <Card.Title>React Apps</Card.Title>
                                    <Card.Text style={{float:'left'}}>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} xl={4}>
                            <Card className='services-card mx-auto'>
                                <Card.Body>   
                                <div><img className="service-image" src={require('./content/images/cloud-apps.svg').default} alt="Elevate"/></div>                                 
                                    <Card.Title>Cloud Apps</Card.Title>
                                    <Card.Text style={{float:'left'}}>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} xl={4}>
                            <Card className='services-card mx-auto'>
                                <Card.Body>   
                                <div><img className="service-image" src={require('./content/images/mobile-apps.svg').default} alt="Elevate"/></div>                                 
                                    <Card.Title>Mobile Apps</Card.Title>
                                    <Card.Text style={{float:'left'}}>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} xl={4}>
                            <Card className='services-card mx-auto'>
                                <Card.Body>   
                                <div><img className="service-image" src={require('./content/images/general-tech-solutions.svg').default} alt="Elevate"/></div>                                 
                                    <Card.Title>General Tech Solutions</Card.Title>
                                    <Card.Text style={{float:'left'}}>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} xl={4}>
                            <Card className='services-card mx-auto'>
                                <Card.Body>   
                                <div><img className="service-image" src={require('./content/images/windows-services.svg').default} alt="Elevate"/></div>                                 
                                    <Card.Title>Windows Services</Card.Title>
                                    <Card.Text style={{float:'left'}}>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} xl={4}>
                            <Card className='services-card mx-auto'>
                                <Card.Body>   
                                <div><img className="service-image" src={require('./content/images/automation.svg').default} alt="Elevate"/></div>                                 
                                    <Card.Title>Automation</Card.Title>
                                    <Card.Text style={{float:'left'}}>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
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