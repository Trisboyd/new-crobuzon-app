import React from 'react';
import RaceCard from './RaceCard';

function Races(props) {

    return (
        <>
            <h3 className="races-title">Species in New Crobuzon</h3>
            <section className="races">
                {props.races.map((race) => {
                    return (
                        <RaceCard key={race.id} title={race.type} description={race.characteristics} image={race.image} />
                    )
                })}
            </section>
        </>
    )
}

export default Races;