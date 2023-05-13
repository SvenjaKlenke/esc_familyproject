import React from 'react';
import BewertungsCard from "./BewertungsCard";

type Bewertung= {
    bewertung: string
}

function BewertungsGallery(probs:Bewertung) {
    return (
        <div className="bewertungsgallery">
            <ul>
                <li>
                    <BewertungsCard name={"Thomas"} bewertung={probs.bewertung}
                </li>
                <li>
                    <BewertungsCard name={"Mama"} bewertung={probs.bewertung}
                </li>
                <li>
                    <BewertungsCard name={"Sina"} bewertung={probs.bewertung}
                </li>
                <li>
                    <BewertungsCard name={"Svenja"} bewertung={probs.bewertung}
                </li>
            </ul>

        </div>
    );
}

export default BewertungsGallery;