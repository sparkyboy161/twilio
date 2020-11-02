const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 3000;
const SMSRouter = require("./routes/sms.route");
const VerifyRouter = require("./routes/verify.route");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Routing
app.use("/sms", SMSRouter);
app.use("/verify", VerifyRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
