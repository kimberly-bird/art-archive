import React, { Component } from "react"
import "./Artists.css"

export default class Artists extends Component {
    render() {
        return (
            <button type="button" className="btn btn-outline-info btn__artists">
                {this.props.artists.first_name} {this.props.artists.last_name}
                <p>Birth Date {this.props.artists.dob} | Death Date {this.props.artists.death_date}</p>
            </button>
        )
    }
}

