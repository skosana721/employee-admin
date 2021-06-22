export const validFormInfo = (form) => {
  let errors = {};
  const idTest =
    /^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/;

  if (!form.name.trim()) {
    errors.name = `Name is required`;
  }
  if (!form.surname.trim()) {
    errors.surname = `Surname is required`;
  }
  if (!form.position.trim()) {
    errors.position = `Job position is required`;
  }
  if (!form.idNumber) {
    errors.idNumber = `ID number is required`;
  } else if (!idTest.test(form.idNumber)) {
    errors.idNumber = `Invalid SA ID number`;
  }
  if (!form.salary) {
    errors.salary = `Salary is required`;
  } else if (form.salary < 3500) {
    errors.salary = `Salary is below the minimum, 3500 `;
  }

  return errors;
};
