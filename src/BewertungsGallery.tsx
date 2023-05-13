import React from 'react';
import BewertungsCard from "./BewertungsCard";
import './BewertungsGallery.css';

type Bewertung= {
    bewertung: "Hallo"
}

function BewertungsGallery() {
    return (
        <div className="bewertungsgallery">
            <ul>
                <li>
                    <BewertungsCard name={"Thomas"} bewertung={"H"}></BewertungsCard>
                </li>
                <li>
                    <BewertungsCard name={"Mama"} bewertung={"H"}></BewertungsCard>
                </li>
                <li>
                    <BewertungsCard name={"Sina"} bewertung={"H"}></BewertungsCard>
                </li>
                <li>
                    <BewertungsCard name={"Svenja"} bewertung={"H"}></BewertungsCard>
                </li>
            </ul>

        </div>
    );
}

export default BewertungsGallery;