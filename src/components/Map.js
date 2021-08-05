import React from 'react';
import map from "../images/new_crobuzon_map.PNG";
import Place from './Place';
import { places } from '../utilities/constants';

function Map(props) {

    return (
        <section className="map__container" id="map">
            <img className="map" src={map} alt="map" />
            {places.map((place) => {
                    return (
                        <Place 
                        place={place}  
                        onPlaceClick={props.onPlaceClick}/>
                    )
                })}
        </section>
    )
}

export default Map;