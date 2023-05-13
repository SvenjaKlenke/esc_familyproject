import React from 'react';
import esc from './images/esc.jpeg';

import './App.css';

import TeilnehmerGallery from "./TeilnehmerGallery";

function App() {
  return (
    <div className="App">
        <img src={esc} alt="ESC"/>
        <p>
            <TeilnehmerGallery/>
        </p>
    </div>
  );
}

export default App;
