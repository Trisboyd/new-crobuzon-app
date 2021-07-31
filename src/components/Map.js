import React from 'react';
import map from "../images/new_crobuzon_map.PNG";
import { perdidoInfo, brockMarshInfo, bonetownInfo } from '../utilities/constants';

function Map(props) {

    function handlePlaceClick(event) {
        props.onPlaceClick(event.target.getAttribute("data-place"));
        console.log(event.target.getAttribute("data-place"));
    }
    return (
        <div className="map-container">
            <img className="map" src={map} alt="map" />
            <div className="map__location map__location_perdido-station"
                data-place={perdidoInfo}
                onClick={handlePlaceClick}>
            </div>
            <div className="map__location map__location_brock-marsh"
                data-place={brockMarshInfo}
                onClick={handlePlaceClick}>
            </div>
            <div className="map__location map__location_bonetown"
                data-place={bonetownInfo}
                onClick={handlePlaceClick}>
            </div>
            <div className="map__location map__location_glasshouse"></div>
        </div>
    )
}

export default Map;