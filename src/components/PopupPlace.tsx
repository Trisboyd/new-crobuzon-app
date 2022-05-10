import React from 'react';
import closeButton from '../images/close-icon.svg';
import { Location } from '../utilities/constants';

interface Props {
    isOpen: boolean,
    closePopup: () => void,
    place: Location
}

export const PopupPlace: React.FC<Props> = (props: Props) => {
    return (
        <div className={`popup ${props.isOpen ? 'popup_visible' : ''}`}>
            <div className="popup__container popup__container_place">
                <img
                    className="popup__exit"
                    src={closeButton}
                    onClick={props.closePopup}
                    alt='close' />
                <img
                    className="popup__image"
                    src={props.place?.link!}
                    alt='place' />
                <div className="popup__info-container">
                    <h3 className="popup__title">{props.place?.title}</h3>
                    <p className="popup__text">{props.place?.about}</p>
                </div>
            </div>
        </div>
    )
}