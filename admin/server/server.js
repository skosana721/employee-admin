const express = require("express");
const app = express();

require("dotenv/config");

app.listen(5050, () => console.log(`Server is running on port 5050...`));
