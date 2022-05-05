import React from 'react';
import map from "../images/new_crobuzon_map.PNG";
import { Place } from './Place';
import { places } from '../utilities/constants';

// the map contains a sourced map of the city and several overlay 'locations' which can be clicked to open a popup with details
// about the location
function Map(props) {

    return (
        <section className="map__container" id="map">
            <img className="map" src={map} alt="map" />
            {places.map((place) => {
                return (
                    <Place
                        place={place}
                        onPlaceClick={props.onPlaceClick} />
                )
            })}
        </section>
    )
}

export default Map;