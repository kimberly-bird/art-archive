import React, { Component } from "react"
import "./ArtworkDetail.css"

export default class EditArtwork extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentView: "update",
            artwork: []
        };
    }

    editArtwork = (id) => {

        let dataToPost = {
            timestamp: Date.now(),
            title: this.state.title,
            year_signed: this.state.year_signed,
            location_created: this.state.location_created,
            size: this.state.size,
            notes: this.state.notes,
            typeId: parseInt(this.state.typeId),
            artistId: parseInt(this.state.artistId),
            framed: this.state.framed,
            conditionId: parseInt(this.state.conditionId),
            ownerId: parseInt(this.state.ownerId),
            userId: parseInt(this.props.activeUser)
        }

        fetch(`http://localhost:5001/artwork/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToPost)

        })
            .then(() => {
                console.log(dataToPost);
                return fetch(`http://localhost:5001/artwork?userId=${this.props.activeUser}&_expand=user`)
            })
            .then(r => r.json())
            .then(artwork => {
                this.setState({
                    artwork: artwork
                })
                this.props.displayAllArtwork()
            })
    }

    handleFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
        console.log(stateToChange);

    }.bind(this)

    // TO DO : form to connect with foreign keys
    render() {

        return (
            <div id="add__art__form">
                <form onSubmit={this.showView}>
                    <label htmlFor="title"><h5>Edit Artwork</h5></label>

                    <div className="form-group">

                        <input id="title"
                            defaultValue={this.props.viewProps.artwork.title}
                            placeholder="Artwork Title"
                            onChange={this.handleFieldChange}
                            className="form-control"
                            rows="4"></input>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Type of Artwork</label>
                            </div>
                            <select
                                id="typeId"
                                defaultValue={this.props.viewProps.artwork.typeId}
                                onChange={this.handleFieldChange}
                                className="custom-select">
                                <option defaultValue="Select">Select... </option>
                                {
                                    this.props.types.map(t =>
                                        <option value={t.id} key={t.id}>{t.name}</option>)
                                }
                            </select>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Artist</label>
                            </div>
                            <select id="artistId"
                                defaultValue={this.props.viewProps.artwork.artistId}
                                onChange={this.handleFieldChange}
                                className="custom-select">
                                <option value="Select Artist">Select... </option>
                                {
                                    this.props.artists.map(a =>
                                        <option value={a.id} key={a.id}>{a.first_name} {a.last_name}</option>)
                                }
                            </select>
                        </div>

                        <input type="number"
                            min="1900"
                            id="year_signed"
                            placeholder="Year Signed"
                            defaultValue={this.props.viewProps.artwork.year_signed}
                            onChange={this.handleFieldChange}
                            className="form-control"
                            rows="4">
                        </input>

                        <input type="location_created"
                            id="location_created"
                            placeholder="Location Created (City, State, Country)"
                            defaultValue={this.props.viewProps.artwork.location_created}
                            onChange={this.handleFieldChange}
                            className="form-control"
                            rows="4">
                        </input>

                        <input type="size"
                            id="size"
                            placeholder="Size"
                            defaultValue={this.props.viewProps.artwork.size}
                            onChange={this.handleFieldChange}
                            className="form-control"
                            rows="4">
                        </input>

                        <div className="input-group mb-3 art__checkbox">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <input type="checkbox" aria-label="Checkbox for following text input" />
                                </div>
                            </div>
                            <p type="text" className="form-control art__notes" aria-label="Text input with checkbox"> Framed? </p>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Condition of Artwork</label>
                            </div>
                            <select id="conditionId"
                                defaultValue={this.props.viewProps.artwork.conditionId}
                                onChange={this.handleFieldChange}
                                className="custom-select">
                                <option defaultValue="Select">Select...</option>
                                {
                                    this.props.conditions.map(c =>
                                        <option value={c.id} key={c.id}>{c.name}</option>)
                                }
                            </select>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Current Owner of Artwork</label>
                            </div>
                            <select id="ownerId"
                                defaultValue={this.props.viewProps.artwork.ownerId}
                                onChange={this.handleFieldChange}
                                className="custom-select">
                                <option defaultValue="Select">Select...</option>
                                {
                                    this.props.owners.map(o =>
                                        <option value={o.id} key={o.id}>{o.first_name} {o.last_name}</option>)
                                }
                            </select>
                        </div>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Artwork Notes</span>
                            </div>
                            <textarea id="notes"
                                aria-label="Artwork Notes"
                                defaultValue={this.props.viewProps.artwork.notes}
                                onChange={this.handleFieldChange}
                                className="form-control art__notes">
                            </textarea>
                        </div>

                        <button type="button" onClick={this.editArtwork} className="btn btn-info btn-lg">Update</button>
                    </div>
                </form>
            </div >
        )
    }
}