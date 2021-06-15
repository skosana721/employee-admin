import React from "react";
import useForm from "./useForm";

const EmployeeForm = () => {
  const { handleChange, formInfo, errors, handleSubmit } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter employee name"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter employee surname"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter employee ID number"
        />
        <input
          type="number"
          onChange={handleChange}
          placeholder="Enter employee job position"
        />
        <input
          type="number"
          onChange={handleChange}
          placeholder="Enter employee salary"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
