require("dotenv").config();
require("../server.js");
const axios = require("axios");
const apiKey = process.env.API_KEY;
console.log(apiKey);

function searchFlights(flightData, cb) {

    let flightParameters = {
        iataCode: flightData.iataCode,
        flightNumber: flightData.flightNumber
    };
    console.log(flightParameters)
    
    let flight = flightParameters.iataCode + flightParameters.flightNumber;

    axios.get("http://aviation-edge.com/v2/public/flights?key=" + apiKey + "&flightIata=" + flight).then(function(response) {
         console.log(response.data);
        //console.log(response.data[0].geography.latitude);

        cb(response.data);

    }).catch(e => {
        console.log(e);
    });
};

// searchFlights();
module.exports = searchFlights;