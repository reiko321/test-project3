const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("client/build"));

// app.get("/api/team", (req, res) => {
//     const team = [
//         {id: 1, firstName: "Jeff", lastName: "Raimundo"},
//         {id: 2, firstName: "Jon", lastName: "Jensen"},
//         {id: 3, firstName: "Randy", lastName: "Jones"},
//         {id: 4, firstName: "Roland", lastName: "Tellez"},
//     ];
//     res.json(team);
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("Congratulations!! API Server is now listening on: " + PORT));