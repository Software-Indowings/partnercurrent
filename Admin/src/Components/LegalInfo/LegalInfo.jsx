import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function LegalInfo(props) {
  const [legalInfo, setLegalInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3307/legal-info`)
      .then((res) => {
        setLegalInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

const openDocumentInNewWindow = (document) => {
  if (document) {
    const pdfString = typeof document === "string" ? document : document.data;
    const pdfWindow = window.open("");
    pdfWindow.document.write(
      `<iframe width='100%' height='100%' src='data:application/pdf;base64,${pdfString}'></iframe>`
    );
  }
};


  return (
    <div
      style={{
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          borderRadius: "10px",
          width: "90%",
          maxWidth: "1200px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Legal Information
        </h2>
        <div style={{ textAlign: "right", marginBottom: "20px" }}>
          <Link to="/createinfo" className="btn btn-success">
            {" "}
            Create +
          </Link>
        </div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Document</th>
            </tr>
          </thead>
          <tbody>
            {legalInfo.map((info) => (
              <tr key={info.info_id}>
                <td>{info.info_id}</td>
                <td>{info.info_email}</td>
                <td>
                  {info.document ? (
                    <button onClick={() => openDocumentInNewWindow(info.document)}>
                      Open Document
                    </button>
                  ) : (
                    "No document available"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/adminpage" className="btn btn-primary me-2">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LegalInfo;
