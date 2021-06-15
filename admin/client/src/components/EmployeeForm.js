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
        {errors.name && <Alert color="danger">{errors.name}</Alert>}
        <input
          type="text"
          name="surname"
          onChange={handleChange}
          placeholder="Enter employee surname"
          value={formInfo.surname}
        />
        {errors.surname && <Alert color="danger">{errors.surname}</Alert>}
        <input
          type="number"
          name="idNumber"
          onChange={handleChange}
          placeholder="Enter employee ID number"
          value={formInfo.idNumber}
        />
        {errors.idNumber && <Alert color="danger">{errors.idNumber}</Alert>}
        <input
          type="text"
          name="position"
          onChange={handleChange}
          placeholder="Enter employee job position"
          value={formInfo.position}
        />
        {errors.position && <Alert color="danger">{errors.position}</Alert>}
        <input
          type="number"
          name="salary"
          onChange={handleChange}
          placeholder="Enter employee salary"
          value={formInfo.salary}
        />
        {errors.salary && (
          <Alert color="danger" fade={true}>
            {errors.salary}
          </Alert>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
