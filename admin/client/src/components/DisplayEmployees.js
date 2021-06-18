import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEmployees } from "../redux/actions/employee";
import Employee from "./Employee";
import { Table } from "reactstrap";

const DisplayEmployees = () => {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, []);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>ID Number</th>
            <th>Position</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <div>
                <Employee key={employee._id} {...employee} />
              </div>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default DisplayEmployees;
