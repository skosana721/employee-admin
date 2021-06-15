const employeeRoutes = (app) => {
  app.get("/employee", (req, res) => {
    res.send("It works");
  });
};
module.exports = { employeeRoutes };
