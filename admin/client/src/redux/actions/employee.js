import axios from "axios";
import {
  ADD_EMPLOYEE,
  GET_EMPLOYEES,
  UPDATE_EMPLOYEE,
} from "../actionTypes/employee";

export const getEmployees = () => {
  return (dispatch) => {
    axios.get("http://localhost:5050/employee").then((res) => {
      dispatch({
        type: GET_EMPLOYEES,
        payload: res.data,
      });
    });
  };
};

export const addEmployee = (form) => {
  return (dispatch) => {
    axios.post("http://localhost:5050/employee", form).then((res) => {
      dispatch({
        type: ADD_EMPLOYEE,
        payload: res.data,
      });
    });
  };
};
export const updateEmployee = (obj) => {
  const { id, surname, salary, position } = obj;
  return (dispatch) => {
    axios
      .put(`http://localhost:5050/employee/${id}`, {
        surname,
        salary,
        position,
      })
      .then((res) => {
        dispatch({
          type: UPDATE_EMPLOYEE,
          payload: id,
        });
      });
  };
};
