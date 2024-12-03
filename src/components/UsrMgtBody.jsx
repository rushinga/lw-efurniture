import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/usermgtstyles.css";

const UserMgtBody = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(10); // You can set this as per your requirement

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    const response = await fetch(
      `http://localhost:9090/admin/users?pageNo=${currentPage}&pageSize=${pageSize}`
    );
    const data = await response.json();
    setUsers(data.users);
    setTotalPages(data.totalPages);
  };

  const handleDelete = async (userId) => {
    const response = await fetch(
      `http://localhost:9090/admin/users/delete/${userId}`,
      {
        method: "POST",
      }
    );
    if (response.ok) {
      fetchUsers(); // Refresh the users list after deletion
    }
  };

  return (
    <>
      <main className="main-content">
        <div className="container mt-4">
          <h3>User Management</h3>
          <div className="mb-3">
            <Link to="/addUser" className="btn btn-primary">
              <i className="fas fa-user-plus"></i> Add New User
            </Link>
            <Link to="/admin/search" className="btn btn-primary">
              <i className="fas fa-search"></i> Search User
            </Link>
            <Link to="/admin/download/users" className="btn btn-success">
              <i className="fas fa-file-export"></i> Export Data (CSV)
            </Link>
            <Link to="/admin/download/users/pdf" className="btn btn-primary">
              <i className="fas fa-file-pdf"></i> Export Data (PDF)
            </Link>
            <Link to="/admin/upload/users" className="btn btn-success">
              <i className="fas fa-file-import"></i> Import Data
            </Link>
          </div>
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.role}</td>
                  <td className="action-column">
                    <Link
                      to={`/admin/users/edit/${user.id}`}
                      className="btn btn-warning btn-sm"
                    >
                      <i className="fas fa-edit"></i> Edit
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(user.id)}
                    >
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li
                className={`page-item ${currentPage === 0 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </button>
              </li>
              {[...Array(totalPages)].map((_, i) => (
                <li
                  key={i}
                  className={`page-item ${currentPage === i ? "active" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(i)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages - 1 ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
};

export default UserMgtBody;
