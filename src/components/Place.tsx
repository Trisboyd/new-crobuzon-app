import React from 'react';
import { Location } from '../utilities/constants';

// interface Location {
//     title: string | null,
//     link: string | null,
//     about: string | null,
//     class: string | null
// }

interface Props {
    place: Location,
    onPlaceClick: (place: Location) => void;
}

// A small overlay on the map that contains details about the location in the form of data-attributes
// once clicked, opens a popup with the details
export const Place: React.FC<Props> = (props: Props) => {
    const { place } = props;

    function handlePlaceClick(event: React.MouseEvent) {
        const target = event.target as HTMLElement
        const placeInfo: Location =
        {
            title: target.getAttribute("data-title"),
            link: target.getAttribute("data-link"),
            about: target.getAttribute("data-about"),
            class: target.getAttribute("classname")
        }
        props.onPlaceClick(placeInfo);
    }

    return (
        <>
            <div
                className={`map__location map__location_${place.class}`
                }
                data-title={place.title}
                data-link={place.link}
                data-about={place.about}
                onClick={(e) => handlePlaceClick(e)} >
            </div >
        </>
    )
}