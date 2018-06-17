import React, { Component } from "react"
import { Button } from "react-bootstrap"
import "./Gallery.css"
import ArtworkList from "./ArtworkList";

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artwork: []
        };
    }

    postNewArtwork = (text) => fetch("http://localhost:5001/artwork", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: this.state.title,
            image_url: this.state.image_url,
            typeId: this.state.typeId,
            artistId: this.state.artistId,
            year_signed: this.state.year_signed,
            location_created: this.state.location_created,
            size: this.state.size,
            framed: this.state.framed,
            conditionId: this.state.conditionId,
            ownerId: this.state.ownerId,
            notes: this.state.notes,
            userId: this.props.activeUser
        })
    })
        .then(() => {
            return fetch("http://localhost:5001/artwork?_sort=title&_order=desc&_expand=user")
        })
        .then(r => r.json())
        .then(artwork => {
            this.setState({
                artwork: artwork
            })
        })

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

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
                    <Button className="addArtBtn" bsStyle="info" bsSize="large">
                        Add New Artwork
                    </Button>

                            <form>
                                <div className="form-group">
                                    <label htmlFor="title"><h5>Add New artwork</h5></label>

                                    <input id="title"
                                        value={this.state.title}
                                        placeholder="Title"
                                        onChange={this.handleFieldChange}
                                        className="form-control"
                                        rows="4"></input>

                                    <input
                                        id="image_url"
                                        type="file"
                                        label="File"
                                        help="Upload image"
                                        value={this.state.image_url}
                                        onChange={this.handleFieldChange}>
                                    </input>

                                    <select id="type"
                                        value={this.state.typeId}
                                        onChange={this.handleFieldChange}
                                        className="form-control"
                                        rows="4">
                                        <option value="Select Type of Artwork">Select Type of Artwork</option>
                                        <option value="Oil Painting">Oil Painting</option>
                                        <option value="Advertising Print">Advertising Print</option>
                                        <option value="Advertising Mockup">Advertising Mockup</option>
                                        <option value="Watercolor Painting">Watercolor Painting</option>
                                    </select>

                                    <select id="artist"
                                        value={this.state.artistId}
                                        onChange={this.handleFieldChange}
                                        className="form-control"
                                        rows="4">
                                        <option value="Select Artist">Select Artist</option>
                                        <option value="Luther Johnson">Luther Johnson</option>
                                        <option value="Suzy West">Suzy West</option>
                                    </select>

                                    <div>Year Signed</div>
                                    <input type="date"
                                        id="year_signed"
                                        value={this.state.year_signed}
                                        onChange={this.handleFieldChange}
                                        className="form-control"
                                        rows="4">
                                    </input>

                                    <input type="location_created"
                                        id="location_created"
                                        placeholder="Location Created (City, State, Country)"
                                        value={this.state.location_created}
                                        onChange={this.handleFieldChange}
                                        className="form-control"
                                        rows="4">
                                    </input>

                                    <input type="size"
                                        id="size"
                                        placeholder="Size"
                                        value={this.state.size}
                                        onChange={this.handleFieldChange}
                                        className="form-control"
                                        rows="4">
                                    </input>

                                    <div>Framed?</div>
                                    <input type="checkbox">
                                    </input>

                                    <select id="condition"
                                        value={this.state.conditionId}
                                        onChange={this.handleFieldChange}
                                        className="form-control"
                                        rows="4">
                                        <option value="Condition of Artwork">Condition of Artwork</option>
                                        <option value="Exellent">Exellent</option>
                                        <option value="Good">Good</option>
                                        <option value="Fair">Fair</option>
                                        <option value="Poor">Poor</option>
                                    </select>

                                    <select id="owner"
                                        value={this.state.ownerId}
                                        onChange={this.handleFieldChange}
                                        className="form-control"
                                        rows="4">
                                        <option value="Current Owner of Artwork">Current Owner of Artwork</option>
                                        <option value="Kimberly Bird">Kimberly Bird</option>
                                        <option value="Suzy West">Suzy West</option>
                                        <option value="June Call">June Call</option>
                                        <option value="Melissa Barnum">Melissa Barnum</option>
                                    </select>

                                    <textarea id="notes"
                                        value={this.state.notes}
                                        placeholder="Notes and/or Summary of Artwork"
                                        onChange={this.handleFieldChange}
                                        className="form-control"
                                        rows="4"></textarea>

                                    <button type="button" onClick={this.postNewArtwork} className="btn btn-info btn-lg">Add</button>
                                </div>
                            </form>

                <ArtworkList artwork={this.state.artwork} activeUser={this.props.activeUser} />
                </div>

        )
    }
}
