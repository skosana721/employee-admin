const Employee = require("../../model/employee");

const employeeRoutes = (app) => {
  app.get("/employee", (req, res) => {
    res.send("It works");
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
