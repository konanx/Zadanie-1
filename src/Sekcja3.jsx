import React from "react";
import { RefreshCw } from "react-feather";
function Sekcja3() {
  return (
    <div
      className="accordion accordion-flush  d-flex flex-column w-100"
      style={{
        padding: "20px",
        gap: "15px",
        background: "#FFFFFF",
        boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.06)",
        borderRadius: "6px",
      }}
    >
      <div className="accordion-item">
        <span className="accordion-header" id="secondInfoAccordionOpen">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#secondInfoCollapseOpen"
            aria-expanded="true"
            aria-controls="secondInfoCollapseOpen"
            style={{
              backgroundColor: "white",
              border: 0,
              boxShadow: "none",
              borderColor: "rgba(0,0,0,.125)",
              color: "#012748",
              fontSize: "22px",
              fontWeight: 500,
            }}
          >
            Informacje szczegółowe
          </button>
        </span>

        <div
          id="secondInfoCollapseOpen"
          className="accordion-collapse collapse show border-0"
          aria-labelledby="secondInfoAccordionOpen"
        >
          <div
            className="accordion-body custom-accordion-body"
            style={{ border: 0 }}
          >
            <div className="d-flex p-0" style={{ gap: "20px" }}>
              <button
                className="btn"
                style={{ padding: "10px 22px", backgroundColor: "#05A8FF" }}
              >
                <span
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#FFFFFF",
                    letterSpacing: "0.4px",
                  }}
                >
                  Importuj
                </span>
              </button>
              <button
                className="btn btn-outlined-primary outline-cleaner"
                style={{
                  color: "#05A8FF",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 0px",
                  gap: "10px",
                  boxShadow: "none",
                  outline: 0,
                }}
              >
                <RefreshCw style={{ width: "14px", height: "14px" }} />
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "0.4px",
                  }}
                >
                  Aktualizuj
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sekcja3;
