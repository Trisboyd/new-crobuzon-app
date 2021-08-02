import React from 'react';
import closeButton from '../images/close-icon.svg';

function PopupPlace(props) {
    return (
        <div className={`modal-window ${props.isOpen ? 'modal-window_visible' : ''}`}>
            <div className="popup__container">
                <img className="popup__exit" src={closeButton} onClick={props.closePopup}/>
                <img className="popup__image" src={props.place?.link} />
                <div className="popup__info-container">
                    <h3 className="popup__title">{props.place?.title}</h3>
                    <p className="popup__text">{props.place?.about}</p>
                </div>
            </div>
        </div>
    )
}

export default PopupPlace;