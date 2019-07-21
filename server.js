const express = require("express");

const app = express();

app.get("/api/customers", (req, res) => {
    const customers = [
        {id: 1, firstName: "Jeff", lastName: "Raimundo"},
        {id: 2, firstName: "Jon", lastName: "Jensen"},
        {id: 3, firstName: "Randy", lastName: "Jones"},
        {id: 4, firstName: "Roland", lastName: "Tellez"},
    ];
    res.json(customers);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("Congratulations!! API Server is now listening on: " + PORT));