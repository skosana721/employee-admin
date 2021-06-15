const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv/config");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.listen(5050, () => console.log(`Server is running on port 5050...`));
