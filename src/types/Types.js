import React, { Component } from "react"
import "./Types.css"

export default class Types extends Component {
    render() {
        return (
            <div className="card types__card">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2">{this.props.types.name}</h6>
                </div>
            </div>
        )
    }
}

