import React from 'react';

function Info() {
  const containerStyle = {
    margin: '30px',
  };

  const pStyle = {
    padding: '20px',
  };

  // Legal information
  const legalInfo = [
    'Cloud Terms of Sale: Link available on pix4d.com homepage',
    'Educational - Declaration of Use form: Link available on pix4d.com homepage',
    'Privacy Policy: Link available on pix4d.com homepage',
    'Software EULA: Link available on pix4d.com homepage',
    'Terms of Sale: Link available on pix4d.com homepage',
    'COMPLEMENTARY TERMS: These terms are provided in the Partner Portal under the General Info tab and apply to Pix4D partners',
  ];

  // Complementary Terms
  const complementaryTerms = [
    'Section 3.1 (a) (i) and (ii): Please refer to the Partner Portal Partner Store tab for a list of all Licensed Products covered by the Legal information',
  ];

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#191b30' }}>Legal Information</h1>
      {legalInfo.map((item, index) => (
        <p key={index} style={pStyle}>{item}</p>
      ))}
      {complementaryTerms.map((item, index) => (
        <p key={index + legalInfo.length} style={pStyle}>{item}</p>
      ))}
    </div>
  );
}

export default Info;