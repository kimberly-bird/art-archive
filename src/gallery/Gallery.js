import React, { Component } from "react"
import "./Gallery.css"
import ArtworkList from "./ArtworkList";

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artwork: [],
            currentView: ""
        };
    }

    componentDidMount() {
        this.props.displayAllArtwork()
    }

    render() {

        return (

            <div className="artworkList">
                <ArtworkList artwork={this.props.artwork} activeUser={this.props.activeUser} displayAllArtwork={this.props.displayAllArtwork} />
            </div>

        )
    }
}
