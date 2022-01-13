import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Zayan click here please");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Congratulations you are a PONNAYA!");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        onClick={handleClick}
      >
        Click for a surprise
      </button>
    </div>
  );
}

export default App;
