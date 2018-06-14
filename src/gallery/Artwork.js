import React, { Component } from "react"
import "./ArtworkList"

export default class Artwork extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top img-responsive" alt="Card image cap" 
                src={this.props.artwork.image_url} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.artwork.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.artwork.artistId} | {this.props.artwork.year_signed} | {this.props.artwork.location_created}</h6>
                    <p className="card-text">{this.props.artwork.notes}</p>
                    <a href="#" className="btn btn-primary">More Details</a>
                </div>
            </div>
        )
    }
}

