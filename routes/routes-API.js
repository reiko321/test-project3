const searchFlights = require("../components/avAPI.js");

module.exports = function(app) {

    app.get("/api/parameters", function(req, res) {
        return res.json(flightParameters)
    });

    app.put("/api/parameters", function(req, res) {
        let flightInfo = req.body;
        console.log(flightInfo);

        flightParameters.push(flightInfo);

        res.json(flightInfo);

    });

    app.post("/api/flights", function(req, res) {
        console.log(req.body);
        searchFlights(req.body, function(result) {
            console.log("API Call", result);
            res.json(result.data);
        });
    }); 
};