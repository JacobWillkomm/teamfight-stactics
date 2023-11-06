const express = require('express');
const mongoose = require('mongoose');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectMongo = require("./config/database"); // Import your database configuration.
const app = express();
const port = 3000;

//Routes
const mainRoutes = require("./routes/main");
const matchRoutes = require("./routes/match")
const participantRoutes = require("./routes/match")

//Services
const participantService = require('./services/participantService');
const matchService = require('./services/matchService')(participantService);


require("dotenv").config({ path: "./config/.env" });

// Connect to MongoDB using Mongoose
connectMongo()

// Passport config
require("./config/passport")(passport);

// Middleware for parsing request data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging
app.use(logger("dev"));

// Method Override for PUT and DELETE HTTP methods
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Use flash messages for errors, info, etc.
app.use(flash());

// Sample route
app.use("/", mainRoutes);
app.use("/match", matchRoutes);
//FINISH ROUTES

app.use("/")

// Start the Express server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
