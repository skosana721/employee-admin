import axios from "axios";
import { GET_EMPLOYEES } from "../actionTypes/employee";

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
