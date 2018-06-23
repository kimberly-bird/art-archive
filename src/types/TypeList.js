import React, { Component } from "react"
import Types from "./Types"
import "./Types.css"

export default class TypeList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            types: []
        }
    }

    componentDidMount() {
        this.props.getTypes()
    }

    render() {
        return (
            <div className="typeList">
                <h1 className="typeList__header">Types of Artwork</h1>
                <div className="container">
                    <div className="row">
                        {
                            this.props.types.map(t => <Types getTypes={this.props.getTypes} className="col-sm" key={t.id} types={t} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}
