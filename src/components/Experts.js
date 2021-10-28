import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Experts.css';
import { Container, Card, Row, Col } from 'react-bootstrap';


function Experts() {
    return (
        <>
        <div id="team" className="experts">
             <div className="d-flex hero-container row">
                <div className='container'>
                    <div className="hero-text col-sm-12 text-center">
                        <div className='headings mb-5'>
                            <div>
                                <h1 className="text-white">Our <span style={{fontWeight:"600"}}>Experts</span></h1>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Curabitur non est cons equat metus mattis vestibulum. Proin sit amet massa massa. Pellentesque.</p>
                            </div>
                        </div>

                        <Container className="large-container">
                            <Row className="align-items-center pb-5">
                            <Col xs={12} xl={4} className="experts-card">
                                <img className="experts-image" src={require('./content/images/team/chase.png').default} alt="Elevate"/> 
                                    <Card className='experts-description' style={{ width: '18rem', margin: 'auto' }}>
                                        <Card.Body className="card-border">                
                                            <Card.Title className="experts-title">Chase Brown</Card.Title>
                                            <Card.Text className="experts-text">
                                            CTO | Founder | Lead Developer
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} xl={4} className="experts-card">
                                <img className="experts-image" src={require('./content/images/team/matt.png').default} alt="Elevate"/> 
                                    <Card className='experts-description' style={{ width: '18rem', margin: 'auto' }}>
                                        <Card.Body className="card-border">                
                                            <Card.Title className="experts-title">Matt Merrill</Card.Title>
                                            <Card.Text className="experts-text">
                                            Software Developer
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} xl={4} className="experts-card">
                                <img className="experts-image" src={require('./content/images/team/will.png').default} alt="Elevate"/> 
                                    <Card className='experts-description' style={{ width: '18rem', margin: 'auto' }}>
                                        <Card.Body className="card-border">                
                                            <Card.Title className="experts-title">Will Lord</Card.Title>
                                            <Card.Text className="experts-text">
                                            Softare Developer
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} xl={4} className="experts-card">
                                <img className="experts-image" src={require('./content/images/team/andrew.png').default} alt="Elevate"/> 
                                    <Card className='experts-description' style={{ width: '18rem', margin: 'auto' }}>
                                        <Card.Body className="card-border">                
                                            <Card.Title className="experts-title">Andrew Thomas</Card.Title>
                                            <Card.Text className="experts-text">
                                            Software Developer
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} xl={4} className="experts-card">
                                <img className="experts-image" src={require('./content/images/team/zack.png').default} alt="Elevate"/> 
                                    <Card className='experts-description' style={{ width: '18rem', margin: 'auto' }}>
                                        <Card.Body className="card-border">                
                                            <Card.Title className="experts-title">Zack Swore</Card.Title>
                                            <Card.Text className="experts-text">
                                            Web Developer
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} xl={4} className="experts-card">
                                <img className="experts-image" src={require('./content/images/team/jonathan.png').default} alt="Elevate"/> 
                                    <Card className='experts-description' style={{ width: '18rem', margin: 'auto' }}>
                                        <Card.Body className="card-border">                
                                            <Card.Title className="experts-title">Jonathan Ansumana</Card.Title>
                                            <Card.Text className="experts-text">
                                            Mobile App Developer
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} xl={4}>
                                </Col>
                                <Col xs={12} xl={4} className="experts-card">
                                <img className="experts-image" src={require('./content/images/team/ben.png').default} alt="Elevate"/> 
                                    <Card className='experts-description' style={{ width: '18rem', margin: 'auto' }}>
                                        <Card.Body className="card-border">                
                                            <Card.Title className="experts-title">Ben Dixon</Card.Title>
                                            <Card.Text className="experts-text">
                                            CEO | Founder
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Experts

