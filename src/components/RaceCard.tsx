import React from 'react';
import { RaceType } from '../utilities/constants';

interface Props {
    onRaceClick: (race: RaceType) => void,
    race: RaceType

}
// cards that contain details about different races in the form of data-attributes, once clicked they open the race popup 
// that is populated with those details
export const RaceCard: React.FC<Props> = (props: Props) => {

    const handleRaceClick = () => {
        props.onRaceClick(props.race);
    }

    return (
        <article className="race-card" onClick={handleRaceClick}>
            <img className="race-card__image" src={props.race.image!} alt={props.race.type!} />
            <h3 className="race-card__title">{props.race.type}</h3>
        </article>
    )
};