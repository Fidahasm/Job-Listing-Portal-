import React, { useState } from "react";
import "./test.css";

function Test() {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div className="container">
      <div className="click-div" onClick={handleClick}>
        Click me!
      </div>
      {showDiv && (
        <div className="side-div">
          This div appears on the right side with 50% width (or 100% on small screens).
        </div>
      )}
    </div>
  );
}

export default Test;
