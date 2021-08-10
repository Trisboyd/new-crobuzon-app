import React from 'react';

// cards that contain details about different races in the form of data-attributes, once clicked they open the race popup 
// that is populated with those details
function RaceCard(props) {

    const handleRaceClick = () => {
        props.onRaceClick(props.race);
    }

    return (
        <article className="race-card" onClick={handleRaceClick}>
                <img className="race-card__image" src={props.image} alt={props.title} />
                <h3 className="race-card__title">{props.title}</h3>
        </article>
    )
}

export default RaceCard;