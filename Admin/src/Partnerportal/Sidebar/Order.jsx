import React from 'react';

function Order() {
  const dummyData = [
    {
      invoiceNumber: '202310-1-R-CH-173955',
      deliveryDate: 'Oct. 16, 2023',
      partnerName: 'PARAS JAIN',
      grandTotal: '262.50',
      currency: 'USD',
      status: 'Paid',
      notes: 'Educational Terms of Service apply',
    },
    {
      invoiceNumber: '202310-1-R-CH-173237',
      deliveryDate: 'Oct. 10, 2023',
      partnerName: 'PARAS JAIN',
      grandTotal: '562.50',
      currency: 'USD',
      status: 'Paid',
      notes: 'Educational Terms of Service apply',
    },
    // Add more objects for other invoices
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
      <h1 style={{ color: '#191b30' }}>Orders</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Invoice Number</th>
            <th style={thStyle}>Delivery Date</th>
            <th style={thStyle}>Partner Name</th>
            <th style={thStyle}>Grand Total</th>
            <th style={thStyle}>Currency</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Notes</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((data, index) => (
            <tr key={index}>
              <td style={tdStyle}>{data.invoiceNumber}</td>
              <td style={tdStyle}>{data.deliveryDate}</td>
              <td style={tdStyle}>{data.partnerName}</td>
              <td style={tdStyle}>{data.grandTotal}</td>
              <td style={tdStyle}>{data.currency}</td>
              <td style={tdStyle}>{data.status}</td>
              <td style={tdStyle}>{data.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Order;