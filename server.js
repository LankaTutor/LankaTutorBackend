const express = require("express");
const mongoose = require("mongoose");

const passport = require("passport");

const users = require("./routes/api/users");
const subjects = require("./routes/api/subjects")
const pastpapers = require("./routes/api/pastpapers");
const exampapers = require("./routes/api/exampaper");
const articles = require("./routes/api/articles");
const subunits = require("./routes/api/subunits");
const questions = require('./routes/api/questions');
const answers = require('./routes/api/answers');
const lectures = require("./routes/api/lectures");
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
app.use("/api/pastpapers", pastpapers);
app.use("/api/exampapers", exampapers);
app.use("/api/questions", questions);
app.use("/api/answers", answers);
app.use("/api/lectures", lectures)
app.use("/api", articles);
app.use("/api", subjects);
app.use("/api", subunits);

// app.use("/api", pastpapers);
// app.use("/api", exampapers);

app.get("/resources", (req, res) => {
  res.status(200).send("Data Fetching");
});

//Port initialization
const port = process.env.PORT; // process.env.port is Heroku's port
app.listen(port, () => console.log(`Server up and running on port ${port} !`));


