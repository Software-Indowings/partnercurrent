import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Announce() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3307/announce/")
      .then((res) => {
        if (res.data.length > 0) {
          setAnnouncements(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const containerStyle = {
    margin: "30px",
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "1500px",
    margin: "auto",
    backgroundColor: "#f5f5f5",
  };

  const thStyle = {
    backgroundColor: "#191b30",
    color: "white",
    textAlign: "left",
    padding: "29px",
    border: "1px solid #dddddd",
  };

  const tdStyle = {
    textAlign: "left",
    padding: "20px",
    border: "1px solid #dddddd",
  };

  const buttonStyle = {
    padding: "8px 12px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#4CAF50",
    color: "white",
    marginRight: "4px",
  };

  const countBoxStyle = {
    display: "inline-block",
    padding: "4px 8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginRight: "8px",
  };

  const totalCostStyle = {
    display: "inline-block",
    padding: "8px 12px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "4px",
  };

  return (
    <div style={containerStyle}>
      {/* <h1 style={{ color: '#191b30' }}> Announcements </h1> */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>
              <h2>Announcements</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {announcements.map((announcements, index) => {
            return (
              <tr key={announcements.announce_id}>
                <td style={tdStyle}>
                <MdOutlineKeyboardArrowRight />
                  <b>{announcements.heading}</b>
                  <br />
                  {announcements.description}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Announce;
