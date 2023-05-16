import React from "react";
import Sekcja1 from "./Sekcja1";
import Sekcja2 from "./Sekcja2";
import Sekcja3 from "./Sekcja3";

function App() {
  return (
    <div
      className="d-flex flex-column align-items-start"
      style={{ padding: "20px", gap: "20px", backgroundColor: "#F2F4F6" }}
    >
      <Sekcja1 />
      <Sekcja2 />
      <Sekcja3 />
    </div>
  );
}

export default App;
