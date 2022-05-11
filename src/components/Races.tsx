import React from 'react';
import { RaceCard } from './RaceCard';
import { RaceType } from '../utilities/constants';

interface Props {
    onRaceClick: (race: RaceType) => void,
    races: RaceType[]
}

export const Races: React.FC<Props> = (props: Props) => {

    return (
        <>
            <h3 className="section-title" id="species">Species in New Crobuzon</h3>
            <section className="races">
                {props.races.map((race, index) => {
                    return (
                        <RaceCard
                            key={index}
                            race={race}
                            onRaceClick={props.onRaceClick} />
                    )
                })}
            </section>
        </>
    )
};