import React, { Component } from 'react';
import "./results.css";


class Results extends Component {

    render() {
        return (
            <div className="container">

                <div className="row">

                    <div className="col">
                        Flight Information
                </div>

                    <div className="col">
                        Medical Kit Contents
                </div>

                    <div className="col">
                        Procedures
                </div>

                </div>
                <a href="/search">← Back to search</a>
            </div>
        );

    }

}

export default Results;