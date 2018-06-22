import React, { Component } from "react"
import "./Artwork.css"

export default class Artwork extends Component {
    render() {
        return (
            <div className="card artwork__card">
                <img className="card-img-top image artwork__image" alt="Card image cap"
                    src={this.props.artwork.image_url} />

                <div className="overlay">
                    <div className="card-body details__overlay ">
                        <h5 className="card-title">{this.props.artwork.title}</h5>
                        <h6 className="card-subtitle mb-2">Artist Name | {this.props.artwork.year_signed} | {this.props.artwork.location_created}</h6>
                        <p className="card-text">{this.props.artwork.notes}</p>
                        <div>
                            Type: {this.props.artwork.typeId} |
                            Size: {this.props.artwork.size} |
                            Framed?: {this.props.artwork.framed} |
                            Condition: {this.props.artwork.conditionId} |
                            Current Owner: {this.props.artwork.ownerId}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

