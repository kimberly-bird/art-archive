import React, { Component } from "react"
import "./Conditions.css"

export default class Conditions extends Component {
    render() {
        return (
            <button type="button" className="btn btn-outline-info btn__conditions">
                {this.props.conditions.name}
            </button>
        )
    }
}

