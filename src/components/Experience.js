import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Experience.css';
import { Container, Card, Row, Col } from 'react-bootstrap';


function Experience() {
    return (
        <div className='experience'>
            <div className='container'>
                <div className="row justify-content-center experience-content-container">
                    <div className="col-12 col-lg-6 my-auto">
                        <span className="experience-blue-text">Experienced More Than</span><br />
                        <span className="experience-black-text">25 Years In Programming</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed morbi habitant laoreet dui, aliquet nibh placerat. Semper quam magna elementum vitae turpis id. Tincidunt mattis quam morbi enim eget. Pulvinar quis pharetra, scelerisque in.</p>    
                        <Card className="experience-card">
                            <Card.Body>
                                <div><img className="experience-card-image" src={require('./content/images/check-image.png').default} alt="Elevate"/></div>
                                <Card.Title>Trusted Partner</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="experience-card">
                            <Card.Body>
                                <div><img className="experience-card-image" src={require('./content/images/check-image.png').default} alt="Elevate"/></div>
                                <Card.Title>Responsibility</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-lg-6 experience-image-col"> 
                        <img className="experience-image" src={require('./content/images/experience-image.png').default} alt="Elevate" />                            
                    </div>              
                </div>
            </div> 
        </div>
    )
}

export default Experience

