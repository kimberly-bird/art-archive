import React, { Component } from "react"
import heroimage from "../images/art_archive_logo_lg.png"
import { Jumbotron, Button } from "react-bootstrap"
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
            <div>

                <Jumbotron className="jumbotron">
                    <img className="jumbotron__img img-fluid" alt="Responsive image" src={heroimage}></img>
                </Jumbotron>

                {/* <button>this is a button</button> */}

                <div className="artworkList">
                    <ArtworkList artwork={this.props.artwork} activeUser={this.props.activeUser} displayAllArtwork={this.props.displayAllArtwork} />
                </div>
            </div>

        )
    }
}
