import React from 'react';
import map from "../images/new_crobuzon_map.PNG";
import { perdidoInfo, brockMarshInfo, bonetownInfo, glasshouseInfo, kinkenInfo, grissTwistInfo } from '../utilities/constants';

function Map(props) {

    function handlePlaceClick(event) {
        const placeInfo = {
            title: event.target.getAttribute("data-title"),
            link: event.target.getAttribute("data-link"),
            about: event.target.getAttribute("data-about")
        }
        props.onPlaceClick(placeInfo);
        console.log(placeInfo);
    }
    return (
        <div className="map-container">
            <img className="map" src={map} alt="map" />
            <div className="map__location map__location_perdido-station"
                data-title={perdidoInfo.title}
                data-link={perdidoInfo.link}
                data-about={perdidoInfo.about}
                onClick={handlePlaceClick}>
            </div>
            <div className="map__location map__location_brock-marsh"
                data-title={brockMarshInfo.title}
                data-link={brockMarshInfo.link}
                data-about={brockMarshInfo.about}
                onClick={handlePlaceClick}>
            </div>
            <div className="map__location map__location_bonetown"
                data-title={bonetownInfo.title}
                data-link={bonetownInfo.link}
                data-about={bonetownInfo.about}
                onClick={handlePlaceClick}>
            </div>
            <div className="map__location map__location_glasshouse"
                data-title={glasshouseInfo.title}
                data-link={glasshouseInfo.link}
                data-about={glasshouseInfo.about}
                onClick={handlePlaceClick}>
            </div>
            <div className="map__location map__location_kinken"
                data-title={kinkenInfo.title}
                data-link={kinkenInfo.link}
                data-about={kinkenInfo.about}
                onClick={handlePlaceClick}>
            </div>
            <div className="map__location map__location_griss-twist"
                data-title={grissTwistInfo.title}
                data-link={grissTwistInfo.link}
                data-about={grissTwistInfo.about}
                onClick={handlePlaceClick}>
            </div>
        </div>
    )
}

export default Map;