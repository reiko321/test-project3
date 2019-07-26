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

    constructor(props) {
        super(props);

        this.state = {
            airline: "",
            flight: ""
          };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.value);

    }

    handleSubmit(event) {
        alert("airline: " + this.state.airline + " | flight: " + this.state.flight);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">

                <div id="user-input">

                    <form onSubmit={this.handleSubmit}>
                        <h4>Search for a flight</h4>
                        <div className="form-group">
                            <label htmlFor="selectAirline">Select Airline</label>
                            <select className="form-control" id="select-airline" name="airline" value={this.state.value} onChange={this.handleChange}>
                                <option value="" defaultValue>----------------</option>
                                <option value="AAL">American Airlines - AA</option>
                                <option value="BAW">British Airways - BA</option>
                                <option value="CPA">Cathay Pacific - CX</option>
                                <option value="ETD">Etihad Airways - EY</option>
                                <option value="HAL">Hawaiian Airlines - HA</option>
                                <option value="QFA">Qantas - QF</option>
                                <option value="QAF">Qatar Airways - QR</option>
                                <option value="UAL">United Airlines - UA</option>
                                <option value="VIR">Virgin Atlantic Airways - VS</option>
                                <option value="VOZ">Virgin Australia - VA</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="flightNumber">Flight Number</label>
                            <input type="text" className="form-control" id="flight-number" placeholder="----------------" name="flight" onChange={this.handleChange} />
                        </div>

                        {/* <a className="btn btn-secondary" href="/results" role="button" type="submit">Submit</a> */}
                        {/* <a href="/results"> */}
                            <button className="btn btn-secondary" type="submit">Submit</button>
                        {/* </a> */}

                    </form>

                </div>

            </div>
        );

    }

}

export default Search;