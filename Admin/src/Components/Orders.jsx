import React, { useState, useEffect } from "react";

function Orders(props) {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3307/allorders')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);
        if (Array.isArray(data)) {
          setOrders(data);
          setError(null);
        } else {
          setError("The response from /allorders is not an array.");
        }
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setError("An error occurred while fetching orders.");
      });
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <h1>Welcome, Orders!</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Email</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total Price</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{order.order_email}</td>
              <td>{order.order_date}</td>
              <td>{order.order_status}</td>
              <td>{order.total_price}</td>
              <td>
                <ul>
                  {order.product &&
                    JSON.parse(order.product).map((product, index) => (
                      <li key={index}>
                        {product.name} - Quantity: {product.quantity}
                      </li>
                    ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
