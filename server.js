const express = require("express");
const path = require("path");

const app = express();

// Sert tous les fichiers du dossier courant (HTML, CSS, PNG, JS…)
app.use(express.static(__dirname));

// Route catch-all → renvoie index.html pour toute URL
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Landing running on port " + port);
});
