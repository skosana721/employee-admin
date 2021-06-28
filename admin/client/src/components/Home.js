import React from "react";
import { Card, Button, CardTitle, CardText, Container } from "reactstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Employee Adminstration</h2>
      <Container>
        <div>
          <Card
            body
            inverse
            style={{ backgroundColor: "#333", borderColor: "#333" }}
          >
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Link to="EmployeeForm">Register</Link>
          </Card>
        </div>
        <div>
          <Card
            body
            inverse
            style={{ backgroundColor: "#333", borderColor: "#333" }}
          >
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Link to="/DisplayEmployees">View</Link>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Home;
