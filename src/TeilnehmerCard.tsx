import React from 'react';
import './TeilnehmerCard.css';


type TeilnehmerCards = {
    startnummer: number
    image: string,
    land: string,
    name: string,
    song: string

}

export default function TeilnehmerCard(props: TeilnehmerCards) {

    return (
        <div className="teilnehmercard">
            <h1>
                {props.startnummer}. {props.land}
            </h1>
                <img className="image" src={props.image} alt={"Fly away"}/>
            <h3>Künstler:in: {props.name}
                <br/>
                Titel: {props.song}
            </h3>

        </div>
    );
}

