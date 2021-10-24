import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Hire.css';


function Hire() {
    return (
        <div className='hire'>
            <div className='container'>
                <div className="d-flex hero-container row">
                    <div className="hero-text col-sm-12 text-center">
                        <div className="hire-blue-text">Hire Developers with</div>
                        <div className="hire-black-text">Pregramming Expertise</div>
                        <img className="hire-image" src={require('./content/images/hire-image.svg').default} alt="Elevate"/>
                    </div>             
                </div>
            </div> 
        </div>
    )
}

export default Hire

