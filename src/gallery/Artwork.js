import React, { Component } from "react"
import "./Artwork.css"

export default class Artwork extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentView: "",
            clickedId: 0
        };
    }

    artworkDetailSelected = function (e) {
        e.preventDefault()
        this.props.showView("details", {artwork: this.props.artwork})
        
        this.setState({
            currentView: "details",
            clickedId: e.target.id
        })

        // )
    }.bind(this)

    render() {
        return (
            <div>
                <div className="card hovereffect">
                    <img className="card-img-top" alt="Card image cap"
                        src={this.props.artwork.image_url} />

                    <div className="overlay card-body">
                        <h2 className="card-title">{this.props.artwork.title}</h2>
                        <h2 className="card-subtitle mb-2">{this.props.artwork.first_name} {this.props.artwork.last_name} | {this.props.artwork.year_signed}</h2>

                        <button type="button" className="btn btn-secondary" ><a href="#" onClick={this.artworkDetailSelected} id={this.props.artwork.id}>Details</a>
                        </button>

                    </div>
                </div>
            </div>
        )
    }
}

