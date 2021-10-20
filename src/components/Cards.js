import React from 'react'
import CardItem from './Card';
import './Cards.css';

function Cards() {
    return (
        <div className='team-cards'>
            <div className='headings mb-5'>
                <div data-aos="zoom-in-up">
                    <h1 className="text-white">Our <span style={{fontWeight:"600"}}>Experts</span></h1>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Curabitur non est cons equat metus mattis vestibulum. Proin sit amet massa massa. Pellentesque.</p>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-4">
                        <CardItem src={require('./content/images/Matt-Headshot.jpg').default}
                            text="Matthew Merrill"
                            label="Software Developer"
                            image={require("./content/images/instagram-logo.png").default}
                            insta="https://www.instagram.com/mcm_photography__/"
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <CardItem src={require('./content/images/chase-headshot.png').default}
                            text="Chase Brown"
                            label="CTO | Founder | Lead Developer"
                            image={require("./content/images/instagram-logo.png").default}
                            insta="https://www.instagram.com/chasethedev/"
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <CardItem src={require('./content/images/zack_headshot.jpg').default}
                            text="Zack Swore"
                            label="Web Developer"
                            image={require("./content/images/instagram-logo.png").default}
                            insta="https://www.instagram.com/zack_swore/"
                        />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Cards