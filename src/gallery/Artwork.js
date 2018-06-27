import React, { Component } from "react"
import "./Artwork.css"

export default class Artwork extends Component {
    render() {
        return (
            <div className="card hovereffect">
                <img className="card-img-top" alt="Card image cap"
                    src={this.props.artwork.image_url} />
                <div className="overlay card-body">
                    <h2 className="card-title">{this.props.artwork.title}</h2>
                    <h2 className="card-subtitle mb-2">Artist Name | {this.props.artwork.year_signed}</h2>
                    {/* <p className="card-text">{this.props.artwork.notes}</p> */}
                    <p>
                        <button type="button" className="btn btn-secondary"><a href="#">Details</a></button>
                    </p>
                    {/* <div>
                            Type: {this.props.artwork.typeId} |
                            Size: {this.props.artwork.size} |
                            Framed?: {this.props.artwork.framed} |
                            Condition: {this.props.artwork.conditionId} |
                            Current Owner: {this.props.artwork.ownerId}
                        </div> */}
                </div>
            </div>
        )
    }
}

