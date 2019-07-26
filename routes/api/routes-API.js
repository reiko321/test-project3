const searchFlights = require("../../components/avAPI.js");

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

    app.get("/api/kits", (req, res) => {
        let query = "SELECT * FROM flightKit WHERE icao_code=?";
        connection.query(query, ["BAW"], function(error, result) {
            if(error) {
                return res.send(err)

            } else {
                return res.json({
                    data: result
                });
            };
            // for(let i = 0; i < result.length; i++) {
            //     console.log("Therapeutic Category: " + result[i].therapeutic_category + " || Medication: " + result[i].generic_name + " || Dose: " + result[i].size_strength + " || Form: " + result[i].form_type + " || Unit: " + result[i].unit + " || Quantity: " + result[i].qty + " || + Location: " + result[i].location);
    
        
        });
    });
};