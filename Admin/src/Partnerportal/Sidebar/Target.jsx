import React from 'react';

function Target() {
  const dummyData = [
    {
      year: '2024',
      quarter: 'Q1',
      from: 'January 1, 2024',
      to: 'March 31, 2024',
      target: '5000',
      sales: '4500',
      targetAchieved: '90%',
    },
    {
      year: '2024',
      quarter: 'Q2',
      from: 'April 1, 2024',
      to: 'June 30, 2024',
      target: '5500',
      sales: '5200',
      targetAchieved: '94.5%',
    },
    {
      year: '2024',
      quarter: 'Q3',
      from: 'July 1, 2024',
      to: 'September 30, 2024',
      target: '6000',
      sales: '5700',
      targetAchieved: '95%',
    },
    {
      year: '2024',
      quarter: 'Q4',
      from: 'October 1, 2024',
      to: 'December 31, 2024',
      target: '6500',
      sales: '6200',
      targetAchieved: '95.4%',
    },
  ];

  const containerStyle = {
    margin: '30px',
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '1500px',
    margin: 'auto',
    backgroundColor: '#f5f5f5',
  };

  const thStyle = {
    backgroundColor: '#191b30',
    color: 'white',
    textAlign: 'left',
    padding: '29px',
    border: '1px solid #dddddd',
  };

  const tdStyle = {
    textAlign: 'left',
    padding: '20px',
    border: '1px solid #dddddd',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#191b30' }}>Sales</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Year</th>
            <th style={thStyle}>Quarter</th>
            <th style={thStyle}>From</th>
            <th style={thStyle}>To</th>
            <th style={thStyle}>Target</th>
            <th style={thStyle}>Sales</th>
            <th style={thStyle}>% Target Achieved</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((data, index) => (
            <tr key={index}>
              <td style={tdStyle}>{data.year}</td>
              <td style={tdStyle}>{data.quarter}</td>
              <td style={tdStyle}>{data.from}</td>
              <td style={tdStyle}>{data.to}</td>
              <td style={tdStyle}>{data.target}</td>
              <td style={tdStyle}>{data.sales}</td>
              <td style={tdStyle}>{data.targetAchieved}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Target;