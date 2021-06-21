import {
  ADD_EMPLOYEE,
  GET_EMPLOYEES,
  UPDATE_EMPLOYEE,
} from "../actionTypes/employee";

const initialState = {
  employees: [],
};
export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case ADD_EMPLOYEE:
      return { ...state, employees: [...state.employees, action.payload] };
    case UPDATE_EMPLOYEE:
      const { id, surname, position, salary } = action.payload;
      return {
        ...state,
        employees: state.employees.map((employee) => {
          if (employee._id === id) {
            return { ...employee, surname, position, salary };
          }
          return employee;
        }),
      };
    default:
      return state;
  }
};
