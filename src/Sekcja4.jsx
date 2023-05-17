import React from "react";
import { Download, ChevronLeft, ChevronRight } from "react-feather";
function Sekcja4() {
  return (
    <div className="mt-3">
      <span style={{ fontSize: "22px", fontWeight: 500, color: "#012748" }}>
        Lista
      </span>
      {/* <div className="table-responsive mt-3"> */}
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
          }}
        >
          <tr>
            <th scope="col">ID</th>
            <th scope="col">KLIENT</th>
            <th scope="col">DATA OD</th>
            <th scope="col">DATA DO</th>
            <th scope="col">UŻYTKOWNIK</th>
            <th scope="col">ETAP</th>
            <th scope="col">POSTĘP</th>
            <th scope="col">BŁĄD</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody style={{ fontSize: "15px", fontWeight: 500, color: "#394348" }}>
          <tr>
            <td className="table-blue-text">12</td>
            <td>Klient nr 1</td>
            <td>05-09-2022 17:28</td>
            <td>05-09-2022 17:32</td>
            <td>Jan Kowalski</td>
            <td>4/4</td>
            <td>100%</td>
            <td>Nie</td>
            <td className="table-blue-text">
              <Download
                style={{ width: 18, height: 18 }}
                className="me-1"
              />
              <span>Pobierz</span>
            </td>
          </tr>

          <tr>
            <td className="table-blue-text">123</td>
            <td>Klient nr 4</td>
            <td>05-09-2022 17:28</td>
            <td>05-09-2022 17:32</td>
            <td>Krystian Nowak</td>
            <td>3/3</td>
            <td>100%</td>
            <td>Nie</td>
            <td className="table-blue-text">
              <Download
                style={{ width: 18, height: 18 }}
                className="me-1"
              />
              <span>Pobierz</span>
            </td>
          </tr>

          <tr>
            <td className="table-blue-text">124</td>
            <td>Klient nr 3</td>
            <td>05-09-2022 17:28</td>
            <td>05-09-2022 17:32</td>
            <td>Administrator</td>
            <td>4/4</td>
            <td>100%</td>
            <td>Nie</td>
            <td className="table-blue-text">
              <Download
                style={{ width: 18, height: 18 }}
                className="me-1"
              />
              <span>Pobierz</span>
            </td>
          </tr>

          <tr>
            <td className="table-blue-text">12345</td>
            <td>Klient nr 4</td>
            <td>05-09-2022 17:28</td>
            <td>05-09-2022 17:32</td>
            <td>Katarzyna Kowalska</td>
            <td>3/3</td>
            <td>100%</td>
            <td>Nie</td>
            <td className="table-blue-text">
              <Download
                style={{ width: 18, height: 18 }}
                className="me-1"
              />
              <span>Pobierz</span>
            </td>
          </tr>
        </tbody>
      </table>
      {/* </div> */}
      <div className="d-flex">
        <button
          className="btn border border-1 d-flex align-items-center"
          style={{
            backgroundColor: "#F2F4F6",
            color: "#6B7B83",
            padding: "20px",
            gap: "20px",
          }}
        >
          <ChevronLeft style={{ width: 14, height: 14 }} />
          <span
            style={{
              fontSize: "14px",
              letterSpacing: "0.4px",
              fontWeight: 500,
              color: "#6B7B83",
            }}
          >
            Wstecz
          </span>
        </button>
        <div style={{ flexGrow: 1 }} />
        <button
          className="btn d-flex align-items-center"
          style={{
            backgroundColor: "#05A8FF",
            color: "#FFFFFF",
            padding: "10px 22px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              letterSpacing: "0.4px",
              fontWeight: 500,
              gap: "8px",
            }}
          >
            Dalej
          </span>
          <ChevronRight style={{ width: 14, height: 14 }} />
        </button>
      </div>
    </div>
  );
}

export default Sekcja4;
