import satData from "./satData.js";
import React from 'react';

function Buttons({ filterByType, setSat, displaySats }) {
  return (
    <div>
      {displaySats.map((sat, key) => (
        <button
          key={sat.id}
          onClick={() => filterByType(sat)}
        >
          {sat} orbit
        </button>
      ))}
      <button
        onClick={() => setSat(satData)}
      >
        All Orbit
      </button>
    </div>
  );
}

export default Buttons;