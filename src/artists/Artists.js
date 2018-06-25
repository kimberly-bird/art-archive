import React, { Component } from "react"
import "./Artists.css"

export default class Artists extends Component {

    state = {
        selectedArtist: ""
    }

    displaySingleArtistArtwork = function (e) {
        e.preventDefault();
        let selectedId = e.target.id
        console.log("e.target", e.target.id);

        // console.log("clicked id", selectedId.id)
        fetch(`http://localhost:5001/artists/${selectedId}?_embed=artwork`)
            .then(r => r.json())
            .then(selectedArtist =>
                this.setState({
                    selectedArtist: selectedArtist,
                    // currentView: "gallery"
                })
            )
    }.bind(this)

    render() {
        return (
            <button type="button" className="btn btn-outline-secondary btn__artists" id={this.props.id} onClick={this.displaySingleArtistArtwork}>
                {this.props.artists.first_name} {this.props.artists.last_name} |
                Birth Date {this.props.artists.dob} | Death Date {this.props.artists.death_date}
            </button>
        )
    }
}

