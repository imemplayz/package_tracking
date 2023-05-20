//create a simple express server and listen to connection
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(cors());

const userRoute = require("./routes/users");
const packageRoute = require("./routes/Packages");

const mongoURI =
  "mongodb+srv://imemplayz:nohackingplease1imem@users.dbq3hkl.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURI).then(() => console.log("MongoDB Connected"));

app.listen(port, () => console.log(`Server listening on port ${port}!`));

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/users", userRoute);
app.use("/packages", packageRoute);
