require("dotenv").config();
const express = require("express");
// const apiKey = process.env.API_KEY;
// console.log(apiKey);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("client/build"));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, "client/public/index.html"), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    });
});

require("./routes/routes-API.js")(app);

app.listen(PORT, () => console.log("Congratulations!! API Server is now listening on: " + PORT));

module.exports = app;