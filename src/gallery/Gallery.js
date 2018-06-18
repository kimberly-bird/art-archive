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

    // postNewArtwork = (text) => fetch("http://localhost:5001/artwork", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         title: this.state.title,
    //         image_url: this.state.image_url,
    //         typeId: this.state.typeId,
    //         artistId: this.state.artistId,
    //         year_signed: this.state.year_signed,
    //         location_created: this.state.location_created,
    //         size: this.state.size,
    //         framed: this.state.framed,
    //         conditionId: this.state.conditionId,
    //         ownerId: this.state.ownerId,
    //         notes: this.state.notes,
    //         userId: this.props.activeUser
    //     })
    // })
    //     .then(() => {
    //         return fetch("http://localhost:5001/artwork?_sort=title&_order=desc&_expand=user")
    //     })
    //     .then(r => r.json())
    //     .then(artwork => {
    //         this.setState({
    //             artwork: artwork
    //         })
    //     })

    // handleFieldChange = (evt) => {
    //     const stateToChange = {}
    //     stateToChange[evt.target.id] = evt.target.value
    //     this.setState(stateToChange)
    // }

    displayAllArtwork = function () {
        fetch(`http://localhost:5001/artwork?userId=${this.props.activeUser}&_expand=user&_sort=title&_order=desc`)
            .then(r => r.json())
            .then(artwork => this.setState({ artwork: artwork }))
    }

    componentDidMount() {
        this.displayAllArtwork()
    }



    render() {

        return (

                <div className="artworkList">

                <ArtworkList artwork={this.state.artwork} activeUser={this.props.activeUser} />
                </div>

        )
    }
}
