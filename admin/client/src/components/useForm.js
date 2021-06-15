import { useState, useEffect } from "react";
const useForm = () => {
  const [formInfo, setformInfo] = useState({
    name: "",
    surname: "",
    idNumber: "",
    position: "",
    salary: "",
  });
  const [errors, setErrors] = useState({});
  return { formInfo, errors };
};

export default useForm;
