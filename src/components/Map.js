import React from 'react';
import map from "../images/new_crobuzon_map.PNG";
import Place from './Place';
import { places } from '../utilities/constants';

function Map(props) {

    return (
        <section className="map-container" id="map">
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


{/* <div className="map__location map__location_perdido-street-station"
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
<div className="map__location map__location_spatters"
    data-title={spattersInfo.title}
    data-link={spattersInfo.link}
    data-about={spattersInfo.about}
    onClick={handlePlaceClick}>
</div>
<div className="map__location map__location_salacus-fields"
    data-title={salacusFieldsInfo.title}
    data-link={salacusFieldsInfo.link}
    data-about={salacusFieldsInfo.about}
    onClick={handlePlaceClick}>
</div>
<div className="map__location map__location_new-crobuzon-university"
    data-title={newCrobuzonUniversityInfo.title}
    data-link={newCrobuzonUniversityInfo.link}
    data-about={newCrobuzonUniversityInfo.about}
    onClick={handlePlaceClick}>
</div> */}