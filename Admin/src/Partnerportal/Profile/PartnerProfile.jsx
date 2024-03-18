import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function PartnerProfile() {
  const [profile, setProfile] = useState([]);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3307/allpartnersprofile`)
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
      <div className="w-75 bg-white rounded p-5">
        <h3 className="mb-4">Partner Profile</h3>
        <div className="d-flex justify-content-end mb-4">
          <Link to="/update_profile" className="btn btn-success">
            {" "}
            Update Profile
          </Link>
        </div>
        {/* Top two rows */}
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>Registered E-mail:</th>
              <td>{user && user.username ? user.username : "Guest"}</td>
            </tr>
            <tr>
              <th>Registered Category:</th>
              <td>{user.category}</td>
            </tr>
          </tbody>
        </table>

        {/* Profile details */}
        {profile.map((partners_profile, index) => {
          if (partners_profile.reg_email === user.username) {
            return (
              <table className="table table-bordered" key={index}>
                <tbody>
                  <tr>
                    <th>Partner Name(Legal):</th>
                    <td>{partners_profile.legal_name}</td>
                  </tr>
                  <tr>
                    <th>Partner Name(Trading):</th>
                    <td>{partners_profile.trading_name}</td>
                  </tr>
                  <tr>
                    <th>Partner Tier:</th>
                    <td>{partners_profile.partner_tier}</td>
                  </tr>
                  <tr>
                    <th>Company founding date:</th>
                    <td>{partners_profile.founding_date}</td>
                  </tr>
                  <tr>
                    <th>Company website:</th>
                    <td>{partners_profile.website}</td>
                  </tr>
                  <tr>
                    <th>VAT Number:</th>
                    <td>{partners_profile.vat_number}</td>
                  </tr>
                  <tr>
                    <th>Total Number of Employees:</th>
                    <td>{partners_profile.employees}</td>
                  </tr>
                  <tr>
                    <th>Registered Address:</th>
                    <td>{partners_profile.address}</td>
                  </tr>
                  <tr>
                    <th>Registered Phone:</th>
                    <td>{partners_profile.reg_phone}</td>
                  </tr>
                  <tr>
                    <th> Key Contacts-</th>
                    <td>
                      Name: {partners_profile.key_name}
                      <br />
                      Email: {partners_profile.key_email}
                      <br />
                      Phone: {partners_profile.key_phone}
                      <br />
                      Position/Dept: {partners_profile.key_position}
                    </td>
                  </tr>
                  <tr>
                    <th>Focus Industries:</th>
                    <td>{partners_profile.industries}</td>
                  </tr>
                  <tr>
                    <th>Comments:</th>
                    <td>{partners_profile.comments}</td>
                  </tr>
                </tbody>
              </table>
            );
          }
          return null;
        })}
        <div className="mt-4">
          <Link to="/layout" className="btn btn-primary me-2">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PartnerProfile;
