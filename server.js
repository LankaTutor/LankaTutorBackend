const express = require("express");
const mongoose = require("mongoose");
const Pastpaper = require("./models/Pastpaper");

const passport = require("passport");

const users = require("./routes/api/users");
const pastpapers = require("./routes/api/pastpapers");

const app = express();

//Middleware
app.use(express.json());

//DB config
const db = require("./config/keys").mongoURI;

//connect to mongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Successfully connected"))
  .catch((err) => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

//Routes
app.use("/api/users", users);
app.get("/a", (req, res) => {
  res.status(200).send("a");
});

app.use("/resources/pastpapers", pastpapers);
//Port initialization
const port = process.env.PORT || 5000; // process.env.port is Heroku's port
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
