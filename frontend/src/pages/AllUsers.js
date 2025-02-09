import React, { useState } from "react";
import { Card, Table, Button, Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/styles/AllUser.css'
const AllUsersDashboard = () => {
  // Generate 35 Dummy Users
  const users = Array.from({ length: 35 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
    joined: `2024-02-${String((index % 28) + 1).padStart(2, "0")}`,
  }));

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  // Calculate index range for current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change Page
  const totalPages = Math.ceil(users.length / usersPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-4">
      {/* Dashboard Summary */}
      <div className="row">
        <div className="col-md-3">
          <Card className="text-center p-3 shadow-sm">
            <h5>Total Users</h5>
            <h2>1500 +</h2>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="text-center p-3 shadow-sm">
            <h5>New Users Today</h5>
            <h2>35 +</h2>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="text-center p-3 shadow-sm">
            <h5>Events Bought</h5>
            <h2>420 +</h2>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="text-center p-3 shadow-sm">
            <h5>Active Users</h5>
            <h2>680 +</h2>
          </Card>
        </div>
      </div>

      {/* Users Table */}
      <div className="mt-4">
        <h4>All Users</h4>
        <Table striped bordered hover className="shadow-sm">
          <thead className="bg-primary text-white" >
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Joined Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.joined}</td>
                <td>
                  <Button variant="danger" size="sm" className="remove-button">Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Pagination */}
        <Pagination className="justify-content-center">
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default AllUsersDashboard;
