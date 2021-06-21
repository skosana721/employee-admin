import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEmployees } from "../redux/actions/employee";
import Employee from "./Employee";
import { Table, Container } from "reactstrap";

const DisplayEmployees = () => {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <Container>
      <Table hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>ID Number</th>
            <th>Position</th>
            <th>Salary</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return <Employee key={employee._id} {...employee} />;
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default DisplayEmployees;
