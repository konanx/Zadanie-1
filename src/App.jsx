import React from "react";
import Sekcja1 from "./Sekcja1";
import Sekcja2 from "./Sekcja2";
import Sekcja3 from "./Sekcja3";
import Sekcja4 from "./Sekcja4";
import ImportModal from "./ImportModal";

function App() {
  return (
    <div
      className="d-flex flex-column align-items-start w-100"
      style={{ padding: "20px", gap: "20px", backgroundColor: "#F2F4F6" }}
    >
      <Sekcja1 />
      <Sekcja2 />
      <Sekcja3 />
      <ImportModal />
    </div>
  );
}

export default App;
