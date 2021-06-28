import React from "react";
import useForm from "./useForm";
import { validFormInfo } from "./validateFormInfo";
const EmployeeForm = () => {
  const { handleChange, formInfo, errors, handleSubmit } =
    useForm(validFormInfo);

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        {errors.name && <div className="form-errors">{errors.name}</div>}
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter employee name"
          value={formInfo.name}
        />
        {errors.surname && <div className="form-errors">{errors.surname}</div>}
        <input
          type="text"
          name="surname"
          onChange={handleChange}
          placeholder="Enter employee surname"
          value={formInfo.surname}
        />
        {errors.idNumber && (
          <div className="form-errors">{errors.idNumber}</div>
        )}
        <input
          type="number"
          name="idNumber"
          onChange={handleChange}
          placeholder="Enter employee ID number"
          value={formInfo.idNumber}
        />
        {errors.position && (
          <div className="form-errors">{errors.position}</div>
        )}
        <input
          type="text"
          name="position"
          onChange={handleChange}
          placeholder="Enter employee job position"
          value={formInfo.position}
        />
        {errors.salary && (
          <div className="form-errors" fade={true}>
            {errors.salary}
          </div>
        )}
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
