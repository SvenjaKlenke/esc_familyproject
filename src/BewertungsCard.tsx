import React from 'react';

type BewertungCards={
    name: string
    bewertung: string
}

function BewertungsCard(props: BewertungCards) {
    function showSehrGut() {
        return props.bewertung = "Sehr gut"

    }

    function showGut() {
        return props.bewertung = "Gut"

    }

    function showMittel() {
        return props.bewertung = "Mittel"

    }

    function showSchlecht() {
        return props.bewertung = "Schlecht"

    }

    function showSehrSchlecht() {
        return props.bewertung = "Sehr schlecht"

    }

    return (
        <div className="bewertungscard">
            <h1>
                {props.name}
            </h1>
            <button onClick={showSehrGut}>Sehr gut</button>
            <button onClick={showGut}>Gut</button>
            <button onClick={showMittel}>Mittel</button>
            <button onClick={showSchlecht}>Schlecht</button>
            <button onClick={showSehrSchlecht}>Sehr schlecht</button>
        </div>
    );
}

export default BewertungsCard;