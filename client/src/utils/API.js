import axios from "axios";

const iataCode = dl;
const flightNumber = 9925;

export default {
  // Gets Flight Information
  getFlightInfo: function(airline, flight) {
    return axios.post("/api/flights" + iataCode + flightNumber);
  },
  // // Gets Medical Kit Contents
  // getMedContent: function(id) {
  //   return axios.get("/api/kit/" + id);
  // },
  // // Gets Treatment Procedures
  // getProcedure: function(id) {
  //   return axios.get("/api/procedure/" + id);
  // }
};