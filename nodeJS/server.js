require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const express = require("express");
const app = express();

// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

app.use(express.json()); // parse json bodies in the request object

// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use("/posts", require("./routes/postRoutes"));

app.use("/labmanagers", require("./routes/labmanager"));
// app.use('/departments', require('./routes/department'));
// app.use('/labs', require('./routes/lab'));
// app.use('/devices', require('./routes/device'));
// app.use('/people', require('./routes/person'));
// app.use('/reservations', require('./routes/reservation'));
// Middleware

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went rely wrong",
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "");
});
// Listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
