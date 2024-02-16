import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";

function MyApp() {
  const [cel, setCel] = useState(0);
  const [deg, setDeg] = useState(32);
  const [kel, setKel] = useState(273.15);

  function convertCel(celc) {
    let celcius = celc.target.value;
    setCel(celcius);
    celcius = parseInt(celcius);

    let kelv = celcius + 273.15;
    let far = celcius * (9 / 5) + 32;

    far = Math.round(far * 100) / 100;
    kelv = Math.round(kelv * 100) / 100;

    if (isNaN(far)) {
      far = 0;
    }
    if (isNaN(kelv)) {
      kelv = 0;
    }
    setKel(kelv);
    setDeg(far);
  }
  function convertFar(far) {
    let dege = far.target.value;
    setDeg(dege);
    dege = parseInt(dege);

    let cele = (dege - 32) * (5 / 9);
    let kelv = cele + 273.15;

    cele = Math.round(cele * 100) / 100;
    kelv = Math.round(kelv * 100) / 100;

    if (isNaN(cele)) {
      cele = 0;
    }
    if (isNaN(kelv)) {
      kelv = 0;
    }
    setKel(kelv);
    setCel(cele);
  }
  function convertKel(kell) {
    let kelv = kell.target.value;
    setKel(kelv);
    kelv = parseInt(kelv);
    let cele = kelv - 273.15;
    let far = cele * (9 / 5) + 32;

    cele = Math.round(cele * 100) / 100;
    far = Math.round(far * 100) / 100;

    if (isNaN(cele)) {
      cele = 0;
    }
    if (isNaN(far)) {
      far = 0;
    }
    setCel(cele);
    setDeg(far);
  }

  return (
    <main class="convert">
      <p>
        <input type="number" onChange={convertCel} value={cel}></input>C
      </p>
      <p>
        <input type="number" onChange={convertFar} value={deg}></input>F
      </p>
      <p>
        <input type="number" onChange={convertKel} value={kel}></input>K
      </p>
    </main>
  );
}

render(<MyApp />, document.getElementById("root"));
