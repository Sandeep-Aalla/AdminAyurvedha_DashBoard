import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function OrderComponent() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:2026/api/v1/orders")
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title text-center">Order Details</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Total Cost</th>
              <th>Dispatch Date</th>
              <th>Order Date</th>
              <th>Customer ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>${order.totalCost}</td>
                <td>{order.dispatchDate}</td>
                <td>{order.orderDate}</td>
                <td>{order.customerId}</td>
                <td>
                  <Link to={`/order/${order.orderId}`}>
                    <button className="btn btn-primary mr-2">View</button>
                  </Link>
                  <button className="btn btn-danger mr-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default OrderComponent;


  
