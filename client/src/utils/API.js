import axios from "axios";

export default {
  // Gets Flight Information
  getFlightInfo: function(airline, flight) {
    return axios.get("/api/flight" + airline + flight);
  },
  // Gets Medical Kit Contents
  getMedContent: function(id) {
    return axios.get("/api/kit/" + id);
  },
  // Gets Treatment Procedures
  getProcedure: function(id) {
    return axios.get("/api/procedure/" + id);
  }
};