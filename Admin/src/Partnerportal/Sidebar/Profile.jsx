import React from 'react';
import background from '../../images/3.png';

function Profile() {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 20px', 
    }}>
      <div style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
        color: '#fff', 
        maxWidth: '600px', 
      }}>
        <h1 style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          color: '#3F84B3'
        }}>Company Profile</h1>
        <p style={{
          fontSize: '1.125rem',
          lineHeight: '1.5',
          marginBottom: '1rem'
        }}>
          Partner Name (Legal): Indo Wings Private Limited<br />
          Partner Name (Trading): Indowings<br />
          Partner Tier: Reseller<br />
          Company founding date: Unspecified<br />
          Company website: <a href="https://www.indowings.com" style={{ color: '#3F84B3' }}>https://www.indowings.com</a><br />
          VAT Number: N/A<br />
          Total number of employees: 25<br />
          Number of Pix4D dedicated employees: 10
        </p>
        <p style={{
          fontSize: '1.125rem',
          lineHeight: '1.5',
          marginBottom: '1rem'
        }}>
          Registered address: D-41, Spinco Towers, First Floor, Sector-11, 201301 - Noida, India
        </p>
        <p style={{
          fontSize: '1.125rem',
          lineHeight: '1.5',
          marginBottom: '1rem'
        }}>
          Key contacts:<br />
          Name: JAIN PARAS<br />
          Email: <a href="mailto:paras@indowings.com" style={{ color: '#3F84B3' }}>paras@indowings.com</a><br />
          Phone: +917830750750<br />
          Position / Dept: Key contact
        </p>
      </div>
    </div>
  );
}

export default Profile;
