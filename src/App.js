// Importing Helpers
import React, { useState } from "react";

// Importing Components
import SingleColour from "./SingleColour";
// import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState("False");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello");
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
          />
          <button className="btn" type="submit">Submit</button>
        </form>
      </section>
      <section className="colors">
        <h4>List Goes Here</h4>
      </section>
    </>
  );
}

// Default Export
export default App;
