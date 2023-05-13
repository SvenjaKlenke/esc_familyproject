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
                    <BewertungsCard name={"Thomas"}></BewertungsCard>
                </li>
                <li>
                    <BewertungsCard name={"Mama"}></BewertungsCard>
                </li>
                <li>
                    <BewertungsCard name={"Sina"}></BewertungsCard>
                </li>
                <li>
                    <BewertungsCard name={"Svenja"}></BewertungsCard>
                </li>
            </ul>

        </div>
    );
}

export default BewertungsGallery;