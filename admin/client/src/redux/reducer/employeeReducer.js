import { DISPLAY_EMPLOYEES } from "../actionTypes/employee";

const initialState = {
  employees: [],
};
export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_EMPLOYEES:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    default:
      return state;
  }
};
