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
        {errors.name && <Alert>{errors.name}</Alert>}
        <input
          type="text"
          name="surname"
          onChange={handleChange}
          placeholder="Enter employee surname"
          value={formInfo.surname}
        />
        {errors.surname && <Alert>{errors.surname}</Alert>}
        <input
          type="text"
          name="idNumber"
          onChange={handleChange}
          placeholder="Enter employee ID number"
          value={formInfo.idNumber}
        />
        {errors.idNumber && <Alert>{errors.idNumber}</Alert>}
        <input
          type="number"
          name="position"
          onChange={handleChange}
          placeholder="Enter employee job position"
          value={formInfo.position}
        />
        {errors.position && <Alert>{errors.position}</Alert>}
        <input
          type="number"
          name="salary"
          onChange={handleChange}
          placeholder="Enter employee salary"
          value={formInfo.salary}
        />
        {errors.salary && <Alert>{errors.salary}</Alert>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
