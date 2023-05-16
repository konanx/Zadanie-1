import React from "react";

function Sekcja2() {
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
        <span className="accordion-header" id="firstInfoAccordionOpen">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#firstInfoCollapseOpen"
            aria-expanded="true"
            aria-controls="firstInfoCollapseOpen"
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
            Informacje podstawowe
          </button>
        </span>

        <div
          id="firstInfoCollapseOpen"
          className="accordion-collapse collapse show border-0"
          aria-labelledby="firstInfoAccordionOpen"
        >
          <div
            className="accordion-body custom-accordion-body"
            style={{ border: 0 }}
          >
            <form>
              <div className="d-flex p-0 w-100" style={{ gap: "30px" }}>
                <div className="w-100">
                  <label
                    htmlFor="informacjepodstawowe1"
                    className="form-label"
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#394348",
                    }}
                  >
                    Tekst
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="informacjepodstawowe1"
                    placeholder="Placeholder"
                    style={{ text: "#6B7B83" }}
                  />
                </div>
                <div className="w-100">
                  <label
                    htmlFor="informacjepodstawowe2"
                    className="form-label required"
                    required={true}
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#394348",
                    }}
                  >
                    Tekst <span style={{ color: "#FF0000" }}>*</span>
                  </label>

                  <select
                    className="form-select w-100"
                    style={{ color: "#6B7B83" }}
                  >
                    <option value="" selected disabled hidden>
                      Placeholder
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="w-100">
                  <label
                    htmlFor="informacjepodstawowe2"
                    className="form-label required"
                    required={true}
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#394348",
                    }}
                  >
                    Dropdown
                  </label>

                  <select
                    className="form-select w-100"
                    style={{ color: "#6B7B83" }}
                  >
                    <option value="" selected disabled hidden>
                      Placeholder
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              <div className="d-flex p-0 w-100 mt-3" style={{ gap: "30px" }}>
                <div className="" style={{ width: "456px" }}>
                  <label
                    htmlFor="informacjepodstawowe4"
                    className="form-label"
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#394348",
                    }}
                  >
                    Dropdown
                  </label>

                  <select
                    className="form-select w-100"
                    style={{ color: "#6B7B83" }}
                  >
                    <option value="" selected disabled hidden>
                      Placeholder
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="w-100">
                  <label
                    htmlFor="informacjepodstawowe5"
                    className="form-label"
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#394348",
                    }}
                  >
                    Opis
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="informacjepodstawowe5"
                    placeholder="Placeholder"
                    style={{ text: "#6B7B83" }}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sekcja2;
