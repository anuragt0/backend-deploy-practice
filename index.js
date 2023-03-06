const express = require("express");
const app = express();
const cors = require('cors')
const connectToMongo = require('./db/database');

// to use req.body
app.use(express.json());
app.use(cors());

connectToMongo();

app.use("/", require("./routes/public.js"));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is listening at port 5000.");
});
