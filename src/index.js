require("dotenv").config();
const express = require("express");
const app = express();

const csvUpload = require("express-fileupload");
const cors = require("cors");
app.use(cors());
app.use(express.json()); // to use req.body
app.use('/public', express.static(__dirname + '/static-files-dir'))

// Mine
const connectToMongoDB = require("./databases/mongodb/config");
connectToMongoDB();

const { createDir } = require("./utilities/helper_functions");
const { vars } = require("./utilities/constants");

// routes
app.use("/api/user/auth", require("./api/routes/user.js"));

app.use("/api/admin/auth", require("./api/routes/admin.js"));

app.use("/api/public", require("./api/routes/public.js"));

/* final catch-all route to index.html defined last */
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  })

app.listen(5000, () => {
  console.log("Server is listening at port 5000");

  createDir(vars.imageFile.ORIGINAL_UPLOADS_DIR_PATH);
  createDir(vars.imageFile.COMPRESSED_UPLOADS_DIR_PATH);
});
