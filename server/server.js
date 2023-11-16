const mongoose = require("mongoose");
const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000", // Replace with your client's URL
    methods: ["GET", "POST"],
  },
});

const port = 3001;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());

const userRoute = require("./routes/users");
const packageRoute = require("./routes/Packages");
const orderRoute = require("./routes/Orders");
const teamRoute = require("./routes/Teams");
const notificationRoute = require("./routes/Notifications");
const noteRoute = require("./routes/Notes");

const mongoURI =
  "mongodb+srv://imemplayz:nohackingplease1imem@users.dbq3hkl.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURI).then(() => console.log("MongoDB Connected"));

// Parse JSON bodies for this app
app.use(bodyParser.json());

// Parse URL-encoded bodies for this app
app.use(bodyParser.urlencoded({ extended: true }));

httpServer.listen(port, () => console.log(`Server listening on port ${port}!`));

io.on("connection", (socket) => {
  console.log("A client connected.");

  // Event handler for notes
  socket.on("notes-changed", (note) => {
    io.emit("refresh-notes", note); // Emit the note to all connected clients including the sender
  });

  // Event handler for projects
  socket.on("project-assigned", () => {
    io.emit("refresh-projects"); // Emit the project to all connected clients including the sender
  });

  // Event handler for disconnection
  socket.on("disconnect", () => {
    console.log("A client disconnected.");
  });
});

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/users", userRoute);
app.use("/packages", packageRoute);
app.use("/orders", orderRoute);
app.use("/teams", teamRoute);
app.use("/notifications", notificationRoute);
app.use("/notes", noteRoute);
