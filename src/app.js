const express = require("express");
const path = require("path");
const favicon = require("serve-favicon"); // ✅ Tambah ini
require("dotenv").config();
const urlRoutes = require("./routes/urlRoutes");

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ✅ Tambahkan middleware favicon sebelum routes
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Routes
app.use("/", urlRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
