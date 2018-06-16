import React, { Component } from "react"
import "./Artwork.css"

export default class Artwork extends Component {
    render() {
        return (
            <div className="card artwork__card">
                <img className="card-img-top image" alt="Card image cap" 
                src={`../images/${this.props.artwork.image_url}`}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.artwork.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.artwork.artistId} | {this.props.artwork.year_signed} | {this.props.artwork.location_created}</h6>
                    <p className="card-text">{this.props.artwork.notes}</p>
                    <a href="#" className="btn btn-info">More Details</a>
                </div>
            </div>
        )
    }
}

