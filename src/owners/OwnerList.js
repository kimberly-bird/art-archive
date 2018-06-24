import React, { Component } from "react"
import Owners from "./Owners"
import "./Owners.css"

export default class OwnerList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            owners: []
        }
    }

    componentDidMount() {
        this.props.getOwners()
    }

    render() {
        return (
            <div className="ownerList">
                <h1 className="ownerList__header">Owners of Artwork</h1>
                <div className="container">
                    <div className="row">
                        {
                            this.props.owners.map(o => <Owners getOwners={this.props.getOwners} className="col-sm" key={o.id} owners={o} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}
