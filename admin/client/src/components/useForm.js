import { useState, useEffect } from "react";
const useForm = (validate) => {
  const [formInfo, setFormInfo] = useState({
    name: "",
    surname: "",
    idNumber: "",
    position: "",
    salary: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formInfo));
  };
  return { formInfo, errors, handleChange, handleSubmit };
};

export default useForm;
