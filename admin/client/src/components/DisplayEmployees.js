import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEmployees } from "../redux/actions/employee";
import Employee from "./Employee";
import { Table, Container } from "reactstrap";

const DisplayEmployees = () => {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const [annual, setAnnual] = useState(0);
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);
  const calculateSalary = (id) => {
    let result;
    for (let i in employees) {
      if (employees[i]._id === id) {
        result = employees[i].salary * 12;
      }
    }
    setAnnual(result);
  };
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
            return (
              <Employee
                key={employee._id}
                {...employee}
                calculateSalary={calculateSalary}
              />
            );
          })}
        </tbody>
      </Table>
      <p>{annual}</p>
    </Container>
  );
};

export default DisplayEmployees;
