require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require("express-session");
const flash = require("express-flash");
const path = require("path");
const connectDB = require('./config/db');
const projectRoutes = require('./routes/projectRoute');
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Middleware for sessions
app.use(session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true
}));

// Middleware for flash messages
app.use(flash());

// Make flash messages available in all views
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use('/api/', projectRoutes);

// Define a default route
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;