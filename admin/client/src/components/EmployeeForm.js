import React from "react";
import useForm from "./useForm";
import { validFormInfo } from "./validateFormInfo";
import { Alert } from "reactstrap";
const EmployeeForm = () => {
  const { handleChange, formInfo, errors, handleSubmit } =
    useForm(validFormInfo);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter employee name"
          value={formInfo.name}
        />

        <input
          type="text"
          name="surname"
          onChange={handleChange}
          placeholder="Enter employee surname"
          value={formInfo.surname}
        />
        <input
          type="text"
          name="idNumber"
          onChange={handleChange}
          placeholder="Enter employee ID number"
          value={formInfo.idNumber}
        />
        <input
          type="number"
          name="position"
          onChange={handleChange}
          placeholder="Enter employee job position"
          value={formInfo.position}
        />
        <input
          type="number"
          name="salary"
          onChange={handleChange}
          placeholder="Enter employee salary"
          value={formInfo.salary}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
