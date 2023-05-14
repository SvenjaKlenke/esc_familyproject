import React from 'react';
import BewertungsCard from "./BewertungsCard";
import './BewertungsGallery.css';



function BewertungsGallery() {
    return (
        <div className="bewertungsgallery">
            <ul>
                <li>
                    <BewertungsCard name={"Name1"}></BewertungsCard>
                </li>
                <li>
                    <BewertungsCard name={"Name2"}></BewertungsCard>
                </li>
                <li>
                    <BewertungsCard name={"Name3"}></BewertungsCard>
                </li>
                <li>
                    <BewertungsCard name={"Name4"}></BewertungsCard>
                </li>
            </ul>

        </div>
    );
}

export default BewertungsGallery;