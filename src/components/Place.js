import React from 'react';

// A small overlay on the map that contains details about the location in the form of data-attributes
// once clicked, opens a popup with the details
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