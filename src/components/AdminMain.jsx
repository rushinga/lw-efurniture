import React from "react";
import "../styles/adminstyles.css";

const AdminMain = () => {
  return (
    <main class="main-content">
      <div class="container">
        <h1 class="mb-4">Welcome to the Admin Dashboard</h1>

        <div class="row mb-4">
          <div class="col-md-4">
            <div class="card text-white bg-primary mb-3">
              <div class="card-header">Total Users</div>
              <div class="card-body">
                <h5 class="card-title">150</h5>
                <p class="card-text">Total registered users in the system.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-white bg-success mb-3">
              <div class="card-header">Total Orders</div>
              <div class="card-body">
                <h5 class="card-title">75</h5>
                <p class="card-text">Total orders placed this month.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-white bg-warning mb-3">
              <div class="card-header">Pending Orders</div>
              <div class="card-body">
                <h5 class="card-title">5</h5>
                <p class="card-text">
                  Orders that are pending processing.
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>

        <h2 class="mb-4">Recent Activity</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
              <th scope="col">User</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-11-03 10:00</td>
              <td>Login</td>
              <td>Admin</td>
            </tr>
            <tr>
              <td>2024-11-03 09:30</td>
              <td>Order Placed</td>
              <td>User123</td>
            </tr>
          </tbody>
        </table>

        <h2 class="mb-4">Quick Actions</h2>
        <div class="row">
          <div class="col-md-4">
            <a th:href="@{/admin/users}" class="btn btn-primary btn-block">
              Manage Users
            </a>
          </div>
          <div class="col-md-4">
            <a href="#" class="btn btn-success btn-block">
              Manage Orders
            </a>
          </div>
          <div class="col-md-4">
            <a href="#" class="btn btn-warning btn-block">
              Manage Products
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminMain;
