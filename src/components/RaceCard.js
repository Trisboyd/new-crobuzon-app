import React from 'react';

function RaceCard(props) {
    return(
        <article className="race-card">
            <img className="race" src={props.pic} alt={props.title}/>
            <h3 className="race-card__title">{props.title}</h3>
            <p className="race-card__description">{props.description}</p>
        </article>
    )
}