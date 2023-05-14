import React, {useState} from 'react';
import './BewertungsCard.css';

type BewertungCards={
    name: string
}

function BewertungsCard(props: BewertungCards) {

    const [bewertungLog, setBewertungLog]= useState("")


    function showSehrGut() {
        setBewertungLog("Sehr gut!");


    }

    function showGut() {
        setBewertungLog("Gut!");

    }

    function showMittel() {
        setBewertungLog("Mittel!");

    }

    function showSchlecht() {
        setBewertungLog("Schlecht!");

    }

    function showSehrSchlecht() {
        setBewertungLog("Sehr schlecht!")

    }

    return (
        <div className="bewertungscard">
            <span className="name"> {props.name}:</span> <span className={bewertungLog === "Sehr gut!" ? "gruen" :
             bewertungLog === "Sehr schlecht!" ? "rot":
             bewertungLog === "Schlecht!" ? "hellrot" :
             bewertungLog === "Gut!" ? "hellgruen" :
              bewertungLog === "Mittel!" ? "gelb" :
                  bewertungLog === null ? "default": 'bla'}>{bewertungLog}</span>

            <button onClick={showSehrGut}>Sehr gut</button>
            <button onClick={showGut}>Gut</button>
            <button onClick={showMittel}>Mittel</button>
            <button onClick={showSchlecht}>Grottig</button>
            <button onClick={showSehrSchlecht}>Unterirdisch</button>
        </div>
    );
}

export default BewertungsCard;