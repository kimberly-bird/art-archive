import React, { Component } from "react"
import "./ArtworkDetail.css"

export default class ArtworkDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentView: "",
            artwork: []
        };
    }

    deleteFromDb = function (id) {
        console.log("clicked button", id);

        fetch(`http://localhost:5001/artwork/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(response =>
                this.props.displayAllArtwork()
            )
    }.bind(this)

    render() {
        return (
            <div className="detail-card">
                <button type="button" className="btn btn-outline-secondary">Edit Artwork</button>
                <a href="#"
                    onClick={() => this.deleteFromDb(this.props.viewProps.artwork.id)}
                    className="btn btn-outline-secondary">Delete Artwork</a>

                <div className="card-columns">
                    <div className="card border-secondary text-center p-3">
                        <h2>{this.props.viewProps.artwork.title}</h2>
                        <h4>by {this.props.viewProps.artwork.artist.first_name} {this.props.viewProps.artwork.artist.last_name}</h4>
                        <p>{this.props.viewProps.artwork.year_signed}</p>
                    </div>

                    <div className="card">
                        <img className="card-img" alt="Card image cap"
                            src={this.props.viewProps.artwork.image_url} />
                    </div>

                    <div className="card border-secondary text-center p-3">
                        <p>Location Created: {this.props.viewProps.artwork.location_created}</p>
                        <p>Size: {this.props.viewProps.artwork.size}</p>
                        <p>Notes: {this.props.viewProps.artwork.notes}</p>
                    </div>

                    <div className="card border-secondary text-center p-3">
                        <p>Condition: {this.props.viewProps.artwork.condition.name}</p>
                        <p>Current Owner: {this.props.viewProps.artwork.owner.first_name} {this.props.viewProps.artwork.owner.last_name}</p>
                        <p>Type of art: {this.props.viewProps.artwork.type.name}</p>
                    </div>
                </div>
            </div>
        )
    }
}

