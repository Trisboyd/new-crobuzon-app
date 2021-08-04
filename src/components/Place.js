import React from 'react';

function Place(props) {

    function handlePlaceClick(event) {
        const placeInfo = {
            title: event.target.getAttribute("data-title"),
            link: event.target.getAttribute("data-link"),
            about: event.target.getAttribute("data-about")
        }
        props.onPlaceClick(placeInfo);
    }

    return(
        <div id={props.place.id}
            className={`map__location map__location_${props.place.class}`}
            data-title={props.place.title}
            data-link={props.place.link}
            data-about={props.place.about}
            onClick={handlePlaceClick}>
        </div>
    )
}

export default Place;