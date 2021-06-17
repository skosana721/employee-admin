const Employee = require("../../model/employee");

const employeeRoutes = (app) => {
  app.get("/employee", async (req, res) => {
    try {
      const results = await Employee.find();
      res.status(200).send(results);
    } catch (error) {
      res.status(404).send(results);
    }
  });
  app.post("/employee", async (req, res) => {
    const { name, surname, idNumber, position, salary } = req.body;
    try {
      const newEmployee = await Employee({
        name,
        surname,
        position,
        idNumber,
        position,
        salary,
      }).save();
      res.status(201).send(newEmployee);
    } catch (error) {
      res.status(400).send(error);
    }
  });
};
module.exports = { employeeRoutes };
