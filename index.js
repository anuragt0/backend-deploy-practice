const express = require("express");
const app = express();
const cors = require('cors')
const connectToMongoDB = require("./src/databases/mongodb/config");
connectToMongoDB();
// to use req.body
app.use(express.json());
app.use(cors());

// app.use("/", require("./src/api/routes/public"));
app.use("/api/auth/user", require("./src/api/routes/user"));
app.use("/api/auth/admin", require("./src/api/routes/admin"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}.`);
});



//deploy works after removing some dependencies from package.json file
// "SHARP" is causing the error
