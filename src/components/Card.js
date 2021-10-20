import React from 'react'
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <>
            <div className="card news-card mb-4">
                <div className="team-image">
                    <img src={props.src} className="card-img-top"/>
                </div>
                <div className="card-body">
                    <h5 className="cards__item__text">{props.text}</h5>
                    <p>{props.label}</p>
                </div>
            </div>
        </>
    )
}

export default Card
