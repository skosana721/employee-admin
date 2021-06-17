const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { employeeRoutes } = require("./routes/api/employee");

app.use(cors());
require("dotenv/config");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
employeeRoutes(app);
app.listen(5050, () => console.log(`Server is running on port 5050...`));
