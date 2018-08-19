import React, { Component } from "react"
import "./Artwork.css"

export default class Artwork extends Component {
    

    getArtworkDetails = function (e, id) {
        e.preventDefault()
        console.log("button clicked");

        fetch(`http://localhost:5001/artwork/${id}?_expand=artist`)
            .then(r => r.json())
            .then(response =>
                this.setState({
                    artwork: artwork,
                    currentView: "details"
                }))
    }

    render() {

        return (
            <div>
                <div className="card hovereffect">
                    <img className="card-img-top" alt="Card image cap"
                        src={this.props.artwork.image_url} />

                    <div className="overlay card-body">
                        <h2 className="card-title">{this.props.artwork.title}</h2>
                        <h2 className="card-subtitle mb-2">Luther Johnson | {this.props.artwork.year_signed}</h2>

                        <button type="button" className="btn btn-secondary" ><a href="#" onClick={this.getArtworkDetails} id={this.props.artwork.id}>Details</a>
                        </button>

                    </div>
                </div>
            </div>
        )
    }
}

