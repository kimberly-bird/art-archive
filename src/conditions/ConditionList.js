import React, { Component } from "react"
import Conditions from "./Conditions"
import "./Conditions.css"

export default class ConditionList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            conditions: []
        }
    }

    componentDidMount() {
        this.props.getConditions()
    }

    render() {
        return (
            <div className="conditionList">
                <h1 className="conditionList__header">Types of Artwork</h1>
                <div className="container">
                    <div className="row">
                        {
                            this.props.conditions.map(c => <Conditions getConditions={this.props.getConditions} className="col-sm" key={c.id} conditions={c} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}
