import React from 'react';
import map from "../images/map.png";
import { Location } from '../utilities/constants';
import { Place } from './Place';
import { places } from '../utilities/constants';

interface Props {
    place: Location,
    onPlaceClick: (place: Location) => void;
}

// the map contains a sourced map of the city and several overlay 'locations' which can be clicked to open a popup with details
// about the location
export const Map: React.FC<Props> = (props: Props) => {

    return (
        <section className="map__container" id="map">
            <img className="map" src={map} alt="map" />
            {places.map((place: Location) => {
                return (
                    <Place
                        place={place}
                        onPlaceClick={props.onPlaceClick} />
                )
            })}
        </section>
    )
};

export default Map;