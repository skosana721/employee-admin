export const validFormInfo = (form) => {
  let errors = {};
  if (!form.name.trim()) {
    errors.name = `Name is required`;
  }
  if (!form.surname.trim()) {
    errors.surname = `Surname is required`;
  }
  if (!form.position.trim()) {
    errors.position = `Job position is required`;
  }
  if (!form.salary) {
    errors.salary = `Salary is required`;
  } else if (form.salary < 3500) {
    errors.salary = `Salary is below the minimum, <p style='color:blue'>3500</p> `;
  }

  return errors;
};
