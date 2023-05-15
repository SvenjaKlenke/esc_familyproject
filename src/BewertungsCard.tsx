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

    function showAnnehmbar() {
        setBewertungLog("Annehmbar!");

    }

    function showGrottig() {
        setBewertungLog("Grottig!");

    }

    function showUnterirdisch() {
        setBewertungLog("Unterirdisch!")

    }

    return (
        <div className="bewertungscard">
            <span className="name"> {props.name}:</span> <span className={bewertungLog === "Sehr gut!" ? "gruen" :
             bewertungLog === "Unterirdisch!" ? "rot":
             bewertungLog === "Grottig!" ? "hellrot" :
             bewertungLog === "Gut!" ? "hellgruen" :
              bewertungLog === "Annehmbar!" ? "gelb" :
                  bewertungLog === null ? "default": 'bla'}>{bewertungLog}</span>

            <button onClick={showSehrGut}>Sehr gut</button>
            <button onClick={showGut}>Gut</button>
            <button onClick={showAnnehmbar}>Annehmbar</button>
            <button onClick={showGrottig}>Grottig</button>
            <button onClick={showUnterirdisch}>Unterirdisch</button>
        </div>
    );
}

export default BewertungsCard;