import React from 'react';
import closeButton from '../images/close-icon.svg';

function PopupRace(props) {

    return (
        <div className={`popup ${props.isOpen ? 'popup_visible' : ''}`}>
            <div className="popup__container popup__container_race">
                <img className="popup__exit" src={closeButton} onClick={props.closePopup} />
                <img className="popup__race-image" src={props.race?.image} alt={props.race?.title} />
                <h4 className="popup__title popup__title_race">{props.race?.type}</h4>
                <p className="popup__text popup__text_race">{props.race?.characteristics}</p>
            </div>
        </div>
    )
}

export default PopupRace;