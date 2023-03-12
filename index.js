const express = require("express");
const app = express();
const cors = require('cors')
const connectToMongoDB = require("./src/databases/mongodb/config");
connectToMongoDB();
// to use req.body
app.use(express.json());
app.use(cors());


//no error with below (aws eb)
app.use("/api/public", require("./src/api/routes/public"));
app.use("/api/user/auth", require("./src/api/routes/user"));
app.use("/api/admin/auth", require("./src/api/routes/admin"));


// This was causing error
// const PORT = process.env.PORT ||5000;

app.listen(process.env.PORT || 7000, () => {
  console.log("Server is listening at port 7000.");
});



//deploy works after removing some dependencies from package.json file
// "SHARP" is causing the error
// "Firebase" folder is causing error
