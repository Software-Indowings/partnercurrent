import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import background from "../images/3.png";

function Orders(props) {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(""); // State to store selected status for each order

  useEffect(() => {
    fetch("http://localhost:3307/allorders")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
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
        setError(
          "An error occurred while fetching orders. Please try again later."
        );
      });
  }, []);

  const handleStatusChange = (orderId) => {
    // Ensure a status is selected
    if (!selectedStatus) {
      console.error("No status selected");
      return;
    }

    // Write your logic here to update the order status
    console.log("Order ID:", orderId);
    console.log("New Status:", selectedStatus);

    // Send a request to update the status of the specific order
    fetch(`http://localhost:3307/updateOrderStatus/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newStatus: selectedStatus }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update status");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Status updated successfully:", data);
        // You can update the local state or perform any necessary actions after updating the status
      })
      .catch((error) => {
        console.error("Error updating status:", error);
        // Handle error
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          borderRadius: "10px",
          width: "90%",
          maxWidth: "1200px",
        }}
      >
        {error && <p>Error: {error}</p>}
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Orders List
        </h1>
       
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Email</th>
              <th>Date</th>
              <th>Products</th>
              <th>Total Price</th>
              <th>Upload Invoice</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.order_id}>
                <td>{order.order_id}</td>
                <td>{order.order_email}</td>
                <td>{order.order_date}</td>

                <td>
                  <ul>
                    {order.product && order.product.length > 0 ? (
                      order.product.map((product, index) => (
                        <li key={index}>
                          {product.name} - Quantity: {product.count}
                        </li>
                      ))
                    ) : (
                      <li>No products found</li>
                    )}
                  </ul>
                </td>
                <td>{order.total_price}</td>
                <td>upload invoice</td>
                <td>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  >
                    <option value="">Select Status</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => handleStatusChange(order.order_id)}>Update Status</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/adminpage" className="btn btn-primary me-2">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

function isValidJSON(jsonString) {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (error) {
    return false;
  }
}

export default Orders;
