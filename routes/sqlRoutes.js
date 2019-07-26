require("../config/connection");


module.exports = (app) => {
    app.get("/sql/kits", (req, res) => {
        // let icaoCode = req.body
        let query = "SELECT * FROM flightKit WHERE icao_code=?";
            connection.query(query, ["BAW"], function (error, result) {

                if (error) {
                    console.log(err);
                }
                res.json(result)
                // for (let i = 0; i < result.length; i++) {
                //     console.log("Therapeutic Category: " + result[i].therapeutic_category + " || Medication: " + result[i].generic_name + " || Dose: " + result[i].size_strength + " || Form: " + result[i].form_type + " || Unit: " + result[i].unit + " || Quantity: " + result[i].qty + " || + Location: " + result[i].location);

                // };
        });
        
    });
};

