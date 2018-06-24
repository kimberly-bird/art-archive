import React, { Component } from "react"
import "./Types.css"

export default class Types extends Component {
    render() {
        return (
            <button type="button" className="btn btn-outline-info btn__types">
                {this.props.types.name}
            </button>
        )
    }
}

