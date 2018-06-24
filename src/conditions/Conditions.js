import React, { Component } from "react"
import "./Conditions.css"

export default class Conditions extends Component {
    render() {
        return (
            <div className="card condition__card">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2">{this.props.conditions.name}</h6>
                </div>
            </div>
        )
    }
}

