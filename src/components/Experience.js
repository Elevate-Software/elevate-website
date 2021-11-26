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
                        <h1>Experienced More Than</h1>
                        <h2>25 Years In Programming</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed morbi habitant laoreet dui, aliquet nibh placerat. Semper quam magna elementum vitae turpis id. Tincidunt mattis quam morbi enim eget. Pulvinar quis pharetra, scelerisque in.</p>    
                        <Card>
                            <Card.Body>
                                <Card.Title>Trusted Partner</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
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

