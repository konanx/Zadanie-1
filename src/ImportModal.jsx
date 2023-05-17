import React from "react";
import { Download, Settings, X } from "react-feather";

function ImportModal() {
  return (
    <div className="modal modal-xl fade" id="importModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="justify-content-end position-relative">
            <button
              className="btn position-absolute"
              data-bs-dismiss="modal"
              style={{
                top: "-10px",
                right: "-10px",
                background: "#FFFFFF",
                borderRadius: "6px",
              }}
            >
              <X style={{ width: "16px", height: "16px" }} />
            </button>
          </div>
          <div className="modal-header border-0"></div>
          <div className="modal-body">
            <p
              className="text-center mt-2"
              style={{
                color: "#012748",
                fontWeight: 500,
                textAlign: "center",
                fontSize: "28px",
              }}
            >
              Importuj
            </p>
            <div className="table-responsive">
              <table className="table mt-2">
                <thead
                  style={{
                    background: "#F2F4F6",
                    padding: "10px 20px",
                    gap: "10px",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    color: "#6B7B83",
                    letterSpacing: "1px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <tr>
                    <th scope="col" className="col-1">
                      ID
                    </th>
                    <th scope="col">NAGŁÓWEK NR 2</th>
                    <th scope="col">NAGŁÓWEK NR 3</th>
                    <th scope="col"></th>
                    <th scope="col" className="text-end">
                      <Settings
                        className="table-blue-text"
                        style={{ width: 18, height: 18 }}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#394348",
                  }}
                >
                  <tr>
                    <td className="table-blue-text">Wybierz</td>
                    <td>Klient nr 1</td>
                    <td>Jan Kowalski</td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td className="table-blue-text">Wybierz</td>
                    <td>Klient nr 1</td>
                    <td>Jan Kowalski</td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td className="table-blue-text">Wybierz</td>
                    <td>Klient nr 1</td>
                    <td>Jan Kowalski</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="modal-footer border-0">
            <button
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-primary"
              style={{ padding: "10px 22px", background: "#05A8FF" }}
            >
              Zamknij
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportModal;
