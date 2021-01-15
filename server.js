const express = require("express");
const bodyParser = require("body-parser");
const config = require('config')
const app = express();

// app.use('/api/currency', require('./app/routes/currency.routes'))

const PORT = config.get('port') || 5000

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to..."});
// });

require("./app/routes/nbkr.routes.js")(app);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });