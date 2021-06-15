import React from "react";
import useForm from "./useForm";

const EmployeeForm = () => {
  const { handleChange, formInfo, errors, handleSubmit } = useForm();
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter employee name" />
        <input type="text" placeholder="Enter employee surname" />
        <input type="text" placeholder="Enter employee ID number" />
        <input type="number" placeholder="Enter employee job position" />
        <input type="number" placeholder="Enter employee salary" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
