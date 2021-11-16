import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Crypto.css';
import { Container, Card, Row, Col } from 'react-bootstrap';


function Crypto() {
    return (
        <>
        <div id="crypto" className="crypto">
             <div className="d-flex hero-container row">
                <div className='container'>
                    <div className="hero-text col-sm-12 text-center">
                        <div className='headings mb-5'>
                            <div>
                                <h1 className="text-white">Crypto <span style={{fontWeight:"600"}}>Automation</span></h1>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Curabitur non est cons equat metus mattis vestibulum. Proin sit amet massa massa. Pellentesque.</p>
                            </div>
                        </div>

                        <Container className="large-container">
                            <Row className="align-items-center pb-5">
                                <Col xs={12} xl={6}>
                                <img className="crypto-image" src={require('./content/images/chance-raffler.svg').default} alt="Elevate"/> 
                                    <Card className='crypto-card' style={{ width: '18rem', margin: 'auto' }}>
                                        <Card.Body>                                        
                                            <Card.Title className="crypto-title">Chance the raffler</Card.Title>
                                            <Card.Text className="crypto-text" style={{float:'left'}}>
                                            A self shilling giveaway bot for defi token communities.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} xl={6}>
                                <img className="crypto-image" src={require('./content/images/crypto-checks.svg').default} alt="Elevate"/> 
                                    <Card className='crypto-card' style={{ width: '18rem', margin: 'auto' }}>
                                        <Card.Body>                
                                            <Card.Title className="crypto-title">Crypto Checks</Card.Title>
                                            <Card.Text className="crypto-text" style={{float:'left'}}>
                                            Trading bot that uses dollar-cost-averaging to optimize long term financial growth.
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

export default Crypto

