import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Info() {
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

  const [info, setInfo] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    axios
      .get(`http://localhost:3307/legal-info`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={containerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>
              <h2>Legal Information</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <div className="d-flex flex-column vh-200 justify-content-center align-items-center">
            <div className="w-75 bg-white rounded p-5">
              {/* <h3 className="mb-4">Partner Profile</h3> */}
              {/* <div className='d-flex justify-content-end mb-4'>
                  <Link to="/update_profile" className='btn btn-success'> Update Profile</Link>
              </div> */}
              {info.map((legal_info, index) => {
                if (legal_info.info_email === user.username) {
                  return (
                    <table className="table table-bordered" key={index}>
                      <tbody>
                        <tr>
                          <th>Registered E-mail:</th>
                          <td>
                            {user && user.username ? user.username : "Guest"}
                          </td>
                        </tr>
                        <tr>
                          <th>Document:</th>
                          <td>
                            {info.document ? (
                              <button
                                onClick={() =>
                                  openDocumentInNewWindow(info.document)
                                }
                              >
                                Open Document
                              </button>
                            ) : (
                              "No document available"
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </tbody>
      </table>
    </div>
  );
}

export default Info;
