import React from 'react';

function RaceCard(props) {

    const handleRaceClick = () => {
        props.onRaceClick(props.race);
    }

    return (
        <article className="race-card" onClick={handleRaceClick}>
                <img className="race-card__image" src={props.image} alt={props.title} />
                <h3 className="race-card__title">{props.title}</h3>
                {/* <p className="race-card__description">{props.description}</p> */}
        </article>
    )
}

export default RaceCard;