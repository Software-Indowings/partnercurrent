import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from '../../features/userSlice';

function Store({username}) {
  const [productsData, setProductsData] = useState([]);
  const [userCategory, setUserCategory] = useState('');
  const [userCommission, setUserCommission] = useState('');
  const user = useSelector(selectUser);

  useEffect(() => {

    setUserCategory(user.category);
    setUserCommission(user.commission);
    
    axios.get('http://localhost:3307/products_create/')
      .then(res => {
        if (res.data.length > 0) {
          const productsWithCount = res.data.map(product => ({ ...product, count: 0 }));
          setProductsData(productsWithCount);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const incrementCount = (index) => {
    const updatedProductsData = [...productsData];
    updatedProductsData[index].count++;
    setProductsData(updatedProductsData);
  };

  const decrementCount = (index) => {
    const updatedProductsData = [...productsData];
    if (updatedProductsData[index].count > 0) {
      updatedProductsData[index].count--;
      setProductsData(updatedProductsData);
    }
  };

  const calculateSubtotal = (index) => {
    const partnerPrice = productsData[index].retail_price * (100 - user.commission) / 100;
    return partnerPrice * productsData[index].count;
  };
  

  const calculateTotalCost = () => {
    return productsData.reduce((total, product) => {
      return total + calculateSubtotal(productsData.indexOf(product));
    }, 0);
  };

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

  const buttonStyle = {
    padding: '8px 12px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#4CAF50',
    color: 'white',
    marginRight: '4px',
  };

  const countBoxStyle = {
    display: 'inline-block',
    padding: '4px 8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginRight: '8px',
  };

  const totalCostStyle = {
    display: 'inline-block',
    padding: '8px 12px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '4px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#191b30' }}>Partner Store - { user.category } </h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Product Name</th>
            <th style={thStyle}>Brochure</th>
            <th style={thStyle}>Stock</th>
            <th style={thStyle}>Retail Price</th>
            <th style={thStyle}>Partner Price-({user.commission})</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Action</th>
            <th style={thStyle}>Subtotal</th>
          </tr>
        </thead>
        <tbody>
        {productsData.map((product, index) => {
          if (product.category === userCategory) {
            return (
              <tr key={product.product_id}>
                <td style={tdStyle}>{product.name}</td>
                <td style={tdStyle}>xyz</td>
                <td style={tdStyle}>{product.stock}</td>
                <td style={tdStyle}>{product.retail_price}</td>
                <td style={tdStyle}>{product.retail_price * (100 - user.commission) / 100}</td>
                <td style={tdStyle}>{product.category}</td>
                <td style={tdStyle}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={countBoxStyle}>{product.count}</div>
                    <button style={buttonStyle} onClick={() => decrementCount(index)}>-</button>
                    <button style={buttonStyle} onClick={() => incrementCount(index)}>+</button>
                  </div>
                </td>
                <td style={tdStyle}>{calculateSubtotal(index)}</td>
              </tr>
            );
          } else if ( userCategory === "All"){
            return (
              <tr key={product.product_id}>
                <td style={tdStyle}>{product.name}</td>
                <td style={tdStyle}>xyz</td>
                <td style={tdStyle}>{product.stock}</td>
                <td style={tdStyle}>{product.retail_price}</td>
                <td style={tdStyle}>{product.retail_price * (100 - user.commission) / 100}</td>
                <td style={tdStyle}>{product.category}</td>
                <td style={tdStyle}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={countBoxStyle}>{product.count}</div>
                    <button style={buttonStyle} onClick={() => decrementCount(index)}>-</button>
                    <button style={buttonStyle} onClick={() => incrementCount(index)}>+</button>
                  </div>
                </td>
                <td style={tdStyle}>{calculateSubtotal(index)}</td>
              </tr>
            ); 
          }
        })}
        </tbody>
      </table>
      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <p>Total Cost: <span style={totalCostStyle}>{calculateTotalCost()}</span></p>
        <button style={buttonStyle}>Proceed</button>
      </div>
    </div>
  );
}

export default Store;