import React from "react";
import { RefreshCw, Copy, FileMinus } from "react-feather";
import Sekcja4 from "./Sekcja4";
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
            className="accordion-body custom-accordion-body d-flex flex-column w-100"
            style={{ border: 0 }}
          >
            <div className="container p-0 m-0">
              <div className="row" style={{ gap: "20px" }}>
                <div className="col col-lg-auto">
                  <button
                    className="btn"
                    style={{ padding: "10px 22px", backgroundColor: "#05A8FF" }}
                    data-bs-toggle="modal"
                    data-bs-target="#importModal"
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
                </div>
                <div className="col col-lg-auto">
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
                <div className="col col-lg-auto">
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
                    <Copy style={{ width: "14px", height: "14px" }} />
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        letterSpacing: "0.4px",
                      }}
                    >
                      Kopiuj
                    </span>
                  </button>
                </div>
                <div className="col col-lg-auto">
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
                    <FileMinus style={{ width: "14px", height: "14px" }} />
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        letterSpacing: "0.4px",
                      }}
                    >
                      Wyczyść
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="container mt-4 m-0 p-0">
              <div className="row gx-3 gy-4">
                <div className="col-12 col-lg-4">
                  <label className="form-label" htmlFor="iInfoSzczegolowe1">
                    Tekst
                  </label>
                  <input
                    className="form-control"
                    id="iInfoSzczegolowe1"
                    type="text"
                    placeholder="Placeholder"
                    style={{
                      fontWeight: 500,
                      fontSize: "15px",
                      color: "#394348",
                    }}
                  />
                </div>
                <div className="col-12 col-lg-4">
                  <label
                    className="form-label"
                    style={{
                      fontWeight: 500,
                      fontSize: "15px",
                      color: "#394348",
                    }}
                  >
                    Dropdown
                  </label>
                  <select
                    className="form-select"
                    style={{ color: "#6B7B83" }}
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Placeholder
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="col-12 col-lg-4">
                  <label
                    className="form-label"
                    htmlFor="iInfoSzczegolowe3"
                    style={{
                      fontWeight: 500,
                      fontSize: "15px",
                      color: "#394348",
                    }}
                  >
                    Tekst
                  </label>
                  <input
                    className="form-control"
                    id="iInfoSzczegolowe3"
                    placeholder="Placeholder"
                    type="text"
                  />
                </div>
              </div>
              <div className="row gx-3 gy-4 mt-1">
                <div className="col-12 col-lg-4">
                  <label className="form-label" htmlFor="iInfoSzczegolowe4">
                    Tekst
                  </label>
                  <input
                    className="form-control"
                    id="iInfoSzczegolowe4"
                    type="text"
                    placeholder="Placeholder"
                    style={{
                      fontWeight: 500,
                      fontSize: "15px",
                      color: "#394348",
                    }}
                  />
                </div>
                <div className="col-12 col-lg-4">
                  <label className="form-label" htmlFor="iInfoSzczegolowe5">
                    Tekst
                  </label>
                  <input
                    className="form-control"
                    id="iInfoSzczegolowe5"
                    type="text"
                    placeholder="Placeholder"
                    style={{
                      fontWeight: 500,
                      fontSize: "15px",
                      color: "#394348",
                    }}
                  />
                </div>
                <div className="col-12 col-lg-4">
                  <label
                    className="form-label"
                    htmlFor="iInfoSzczegolowe6"
                    style={{
                      fontWeight: 500,
                      fontSize: "15px",
                      color: "#394348",
                    }}
                  >
                    Tekst
                  </label>
                  <input
                    className="form-control"
                    id="iInfoSzczegolowe6"
                    placeholder="Placeholder"
                    type="text"
                  />
                </div>
              </div>

              <div className="row gx-3 gy-4 mt-1">
                <div className="col-12 col-lg-4">
                  <label
                    className="form-label"
                    style={{
                      fontWeight: 500,
                      fontSize: "15px",
                      color: "#394348",
                    }}
                  >
                    Dropdown
                  </label>
                  <select
                    className="form-select"
                    style={{ color: "#6B7B83" }}
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Placeholder
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="col-12 col-lg-4">
                  <label className="form-label" htmlFor="iInfoSzczegolowe8">
                    Tekst
                  </label>
                  <input
                    className="form-control"
                    id="iInfoSzczegolowe8"
                    type="text"
                    placeholder="Placeholder"
                    style={{
                      fontWeight: 500,
                      fontSize: "15px",
                      color: "#394348",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="form-check form-switch mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="switch1"
              />
              <label
                className="form-check-label"
                htmlFor="switch1"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#012748",
                }}
              >
                Switch 1
              </label>
            </div>
            <div className="form-check form-switch mt-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="switch2"
              />
              <label
                className="form-check-label"
                htmlFor="switch2"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#012748",
                }}
              >
                Switch 2
              </label>
            </div>
            <div className="form-check form-switch mt-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="switch3"
              />
              <label
                className="form-check-label"
                htmlFor="switch3"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#012748",
                }}
              >
                Switch 3
              </label>
            </div>
            <div className="container m-0 p-0 mt-3">
              <div className="row">
                <div className="col-12 col-lg-4">
                  <label
                    htmlFor="input-zgloszona-sprzedaz"
                    className="form-label"
                    placeholder="Placeholder"
                    style={{
                      fontWeight: 500,
                      fontSize: "15px",
                      color: "#394348",
                    }}
                  >
                    Data sprzedaży zgłoszona na PWI
                  </label>
                  <input
                    className="form-control"
                    id="input-zgloszona-sprzedaz"
                    placeholder="Placeholder"
                  />
                </div>
              </div>
            </div>
            <Sekcja4 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sekcja3;
