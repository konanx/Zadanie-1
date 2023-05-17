import React from "react";
import { Home, ChevronRight } from "react-feather";
function Sekcja1() {
  return (
    <div
      className="d-flex align-items-center"
      style={{ gap: "10px", padding: "0 10px 0px 0px" }}
    >
      <span
        style={{
          fontSize: "24px",
          color: "#012748",
        }}
      >
        Ekran nr 1
      </span>
      <div
        style={{ width: "1px", height: "26px", border: "1px solid #D8D6DE" }}
      />
      <Home style={{ width: 14, height: 14, color: "#05A8FF" }} role="button" />
      <ChevronRight style={{ width: 14, height: 14, color: "#6B7B83" }} />
      <span
        style={{
          fontSize: "14px",
          color: "#05A8FF",
        }}
        role="button"
      >
        Start
      </span>
      <ChevronRight style={{ width: 14, height: 14, color: "#6B7B83" }} />
      <span
        style={{
          fontSize: "14px",
          color: "#6B7B83",
        }}
      >
        Ekran nr 1
      </span>
    </div>
  );
}

export default Sekcja1;
