import React from "react";
import EditModal from "./EditModal";

const Employee = ({
  _id,
  name,
  surname,
  idNumber,
  position,
  salary,
  calculateSalary,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{idNumber}</td>
      <td>{position}</td>
      <td>{salary}</td>
      <EditModal
        surname={surname}
        id={_id}
        position={position}
        salary={salary}
      />
      <button onClick={() => calculateSalary(_id)}>Annual</button>
      <p>{calculateSalary}</p>
    </tr>
  );
};

export default Employee;
