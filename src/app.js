const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const serverless = require("serverless-http"); // serverless handler
require("dotenv").config();

const urlRoutes = require("./routes/urlRoutes");

const app = express();

// Middleware untuk JSON
app.use(express.json());

// EJS view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Favicon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Static folder jika ada file CSS / JS / gambar
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", urlRoutes);

// Halaman landing
app.get("/", (req, res) => {
  res.render("index");
});

// ❌ Jangan pakai app.listen() karena Vercel serverless
// ✅ Export handler untuk serverless
module.exports = serverless(app);
