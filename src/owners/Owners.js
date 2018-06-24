import React, { Component } from "react"
import "./Owners.css"

export default class Owners extends Component {
    render() {
        return (
            <button type="button" className="btn btn-outline-info btn__owners">
                {this.props.owners.first_name} {this.props.owners.last_name}
                <p>Current Location: {this.props.owners.current_location}</p>
            </button>
        )
    }
}

