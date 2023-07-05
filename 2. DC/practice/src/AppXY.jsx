import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handleMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
    // setCoords((prev) => ({ ...prev }));
    console.log(coords);
  };

  return (
    <div className="container" onPointerMove={handleMove}>
      {/* <div className="pointer" style={{ transform: `translate(${coords.x}px,${coords.y}px)` }} /> */}
      <div className="pointer" style={{ transform: `translate(${coords.x}px,100px)` }} />
    </div>
  );
}
