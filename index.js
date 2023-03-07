const express = require("express");
const app = express();
const cors = require('cors')
const connectToMongoDB = require("./src/databases/mongodb/config");
connectToMongoDB();
// to use req.body
app.use(express.json());
app.use(cors());

app.use("/", require("./src/api/routes/public"));
// app.use("/api/auth/user", require("./src/api/routes/user"));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is listening at port 5000.");
});

