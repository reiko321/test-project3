import React, { Component } from 'react';
import "./search.css";
// import API from "../utils/API";
// import SearchBtn from "../Search/SearchBtn";


class Search extends Component {

    // state = {
    //     airline: "",
    //     flight: ""
    //   };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.airline && this.state.flight) {
    //       API.getFlightInfo({
    //         airline: this.state.airline,
    //         flight: this.state.flight
    //       })
    //         .then(res => this.loadInfo())
    //         .catch(err => console.log(err));
    //     }
    //   };

    render() {
        return (
            <div className="container">

                <div id="user-input">
                    
                    <form>
                        <h4>Search for a flight</h4>
                        <div className="form-group">
                            <label htmlFor="selectAirline">Select Airline</label>
                            <select className="form-control" id="select-airline">
                                <option>American Airlines - AA</option>
                                <option>British Airways - BA</option>
                                <option>Cathay Pacific - CX</option>
                                <option>Etihad Airways - EY</option>
                                <option>Hawaiian Airlines - HA</option>
                                <option>Qantas - QF</option>
                                <option>Qatar Airways - QR</option>
                                <option>United Airlines - UA</option>
                                <option>Virgin Atlantic Airways - VS</option>
                                <option>Virgin Australia - VA</option>
                            </select>
                        </div>

                         <div className="form-group">
                            <label htmlFor="flightNumber">Flight Number</label>
                            <input type="text" className="form-control" id="flight-number" placeholder="----------------"/>
                        </div>

                        <a className="btn btn-secondary" href="/Results" role="button" type="submit">Submit</a>

                    </form>

                </div>

            </div>
          );

    }
  
}

export default Search;