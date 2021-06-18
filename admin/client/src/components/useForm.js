import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/actions/employee";
const useForm = (validate) => {
  const [formInfo, setFormInfo] = useState({
    name: "",
    surname: "",
    idNumber: "",
    position: "",
    salary: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formInfo));
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      dispatch(addEmployee(formInfo));
    }
  }, [errors]);
  return { formInfo, errors, handleChange, handleSubmit };
};

export default useForm;
