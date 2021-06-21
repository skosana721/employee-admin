import React from "react";
import EditModal from "./EditModal";

const Employee = ({ _id, name, surname, idNumber, position, salary }) => {
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
    </tr>
  );
};

export default Employee;
