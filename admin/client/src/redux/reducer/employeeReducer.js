import { GET_EMPLOYEES } from "../actionTypes/employee";

const initialState = {
  employees: [],
};
export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    default:
      return state;
  }
};
