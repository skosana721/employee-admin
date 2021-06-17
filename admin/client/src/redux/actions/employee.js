import axois from "axios";
import { DISPLAY_EMPLOYEES } from "../actionTypes/employee";

export const displayEmployees = () => {
  return (dispatch) => {
    axois.get("http://localhost:5050/employee").then((res) => {
      dispatch({
        type: DISPLAY_EMPLOYEES,
        payload: res.data,
      });
    });
  };
};
