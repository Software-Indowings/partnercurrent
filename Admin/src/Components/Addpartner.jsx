import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import background from '../images/3.png';

function AddPartner() {
  const [partners, setPartners] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3307/')
      .then(res => {
        if (res.data.length > 0) {
          setPartners(res.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3307/delete/${id}`)
      .then(res => {
        setPartners(partners.filter(partner => partner.id !== id));
      })
      .catch(err => console.log(err))
  }

  const togglePasswordVisibility = (partnerId) => {
    const updatedPartners = partners.map(partner => {
      if (partner.id === partnerId) {
        return {
          ...partner,
          showPassword: !partner.showPassword
        };
      }
      return partner;
    });
    setPartners(updatedPartners);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}
    >
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', width: '90%', maxWidth: '1200px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Partner List</h2>
        <div style={{ textAlign: 'right', marginBottom: '20px' }}>
          <Link to="/create" className='btn btn-success'> Create +</Link>
        </div>
        <table className='table table-bordered table-hover ' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Password</th>
              <th>Category</th>
              <th>Commission(%)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((partner, index) => (
              <tr key={index} style={{ backgroundColor: isHovering ? '#f8f9fa' : 'transparent' }}>
                <td>{partner.id}</td>
                <td>{partner.username}</td>
                <td style={{ position: 'relative' }}>
                  {partner.showPassword ? partner.password : '*'.repeat(partner.password.length)}
                  <button onClick={() => togglePasswordVisibility(partner.id)} className='btn btn-sm btn-secondary mx-2' style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)' }}>
                    {partner.showPassword ? 'Hide' : 'Show'}
                  </button>
                </td>
                <td>{partner.category}</td>
                <td>{partner.commission}</td>
                <td>
                  <Link to={`/read/${partner.id}`} className='btn btn-sm btn-info'>Manage</Link>
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

export default AddPartner;
