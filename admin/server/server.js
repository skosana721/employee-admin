const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { employeeRoutes } = require("./routes/api/employee");

require("dotenv/config");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
employeeRoutes(app);
app.listen(5050, () => console.log(`Server is running on port 5050...`));
