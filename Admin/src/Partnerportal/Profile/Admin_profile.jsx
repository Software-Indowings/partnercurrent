import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Admin_profile() {
  const [profile, setProfile] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3307/allpartnersprofile/')
      .then(res => {
        if (res.data.length > 0) {
            setProfile(res.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:3307/delete/${id}`)
//       .then(res => {
//         setPartners(partners.filter(partner => partner.id !== id));
//       })
//       .catch(err => console.log(err))
//   }


  return (
    <div   className="d-flex justify-content-center align-items-center vh-100">
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', width: '90%', maxWidth: '1200px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Partner Profiles</h2>
        {/* <div style={{ textAlign: 'right', marginBottom: '20px' }}>
          <Link to="/create" className='btn btn-success'> Create +</Link>
        </div> */}
        <table className='table table-bordered table-hover ' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <thead>
            <tr>
            <th>ID</th><th>Email</th>
              <th>Legal Name</th>
              <th>Trading Name</th>
              <th>Phone</th>
              <th>Full Profile</th>
            </tr>
          </thead>
          <tbody>
            {profile.map((partners_profile, index) => (
              <tr key={index} style={{ backgroundColor: isHovering ? '#f8f9fa' : 'transparent' }}>
                <td>{partners_profile.profile_id}</td><td>{partners_profile.reg_email}</td>
                <td>{partners_profile.legal_name}</td>
                <td>{partners_profile.trading_name}</td>
                <td>{partners_profile.reg_phone}</td>
                
                <td>
                  <Link to={`/read_profile/${partners_profile.profile_id}`} className='btn btn-sm btn-info'>View</Link>
                  {/* <button onClick={() => handleDelete(partner.id)} className='btn btn-sm btn-danger mx-2'>Delete</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/adminpage" className='btn btn-primary me-2'>Back</Link>
        </div>
      </div>
    </div>
  );
}

export default Admin_profile;
