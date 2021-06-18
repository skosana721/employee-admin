import React from "react";

const Employee = ({ name, surname, idNumber, position, salary }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{idNumber}</td>
      <td>{position}</td>
      <td>{salary}</td>
    </tr>
  );
};

export default Employee;
