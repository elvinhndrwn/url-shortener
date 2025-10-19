const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
require("dotenv").config();
const urlRoutes = require("./routes/urlRoutes");
const serverless = require("serverless-http");

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware favicon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Routes
app.use("/", urlRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

// ❌ Hapus app.listen() untuk Vercel
// const PORT = process.env.PORT;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// ✅ Export handler untuk serverless
module.exports.handler = serverless(app);
