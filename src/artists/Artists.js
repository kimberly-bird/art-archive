import React, { Component } from "react"
import "./Artists.css"

export default class Artists extends Component {
    render() {
        return (
            <div className="card artist__card">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2">{this.props.artists.first_name}{this.props.artists.last_name}</h6>
                    <p>Birth Date {this.props.artists.dob} | Death Date {this.props.artists.death_date}</p>
                </div>
            </div>
        )
    }
}

