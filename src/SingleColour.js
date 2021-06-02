// Importing Helpers
import React, { useState, useEffect } from "react";

// Functional Component
const SingleColour = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  const hexValue = `#${hexColor}`;

  return (
    <article
      className={`color ${index > 10 && `color-light`}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue.toUpperCase()}</p>
      
    </article>
  );
};

// Default Export
export default SingleColour;
