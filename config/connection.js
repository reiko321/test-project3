require("dotenv").config();
require("../server");
require("../routes/sqlRoutes");
const password = process.env.DB_SECRET;
console.log(password);
const mysql =require('mysql');

let connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else{
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: password,
        database: "test_db"
    });
};

connection.connect(err => {
    if(err) {
        console.log("Error connecting: " + err.stack);
        return;
   };
    console.log("Connected as id " + connection.threadId);

    
    // flightSearch();

    // let BAW = icaoCode
    
    //  function flightSearch() {   
    //         let query = "SELECT * FROM flightKit WHERE icao_code=?";
    //         connection.query(query, ["BAW"], function(error, result) {
    //             for(let i = 0; i < result.length; i++) {
    //                 console.log("Therapeutic Category: " + result[i].therapeutic_category + " || Medication: " + result[i].generic_name + " || Dose: " + result[i].size_strength + " || Form: " + result[i].form_type + " || Unit: " + result[i].unit + " || Quantity: " + result[i].qty + " || + Location: " + result[i].location);
        
    //             };
    //         });
        
    // };   
    connection.end( err => {

        if(err) {
        console.log("error disconnecting: " + err.stack);
        return;
        };
    });
    console.log("connection terminated successfully");
});
module.exports = connection;