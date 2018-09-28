import React, { Component } from "react"
import Dropzone from 'react-dropzone';
import request from 'superagent';
import "./AddArtwork.css"
import { parse } from "url";

// variables to handle connection with cloudinary (images)
const CLOUDINARY_UPLOAD_PRESET = 'fiorembk';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/art-archive/upload';

// get logged in userId
const activeUser = localStorage.getItem("yakId")

export default class AddArtwork extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artwork: [],
            uploadedFileCloudinaryUrl: "",
            currentView: "addArtwork"
        };
    }

    // sets state for image drop 
    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });
        this.handleImageUpload(files[0]);
    }

    // handles image upload 
    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);
        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }
            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
    }

    postNewArtwork = (e) => {
        e.preventDefault();

        let dataToPost = {
            timestamp: Date.now(),
            title: this.state.title,
            image_url: this.state.uploadedFileCloudinaryUrl,
            year_signed: this.state.year_signed,
            location_created: this.state.location_created,
            size: this.state.size,
            notes: this.state.notes,
            typeId: parseInt(this.state.typeId),
            artistId: parseInt(this.state.artistId),
            framed: this.state.framed,
            conditionId: parseInt(this.state.conditionId),
            ownerId: parseInt(this.state.ownerId),
            userId: parseInt(activeUser)
        }

        fetch(`http://127.0.0.1:8000/artwork/`, {
        // fetch(`http://localhost:5001/artwork?userId=${activeUser}&_expand=user&_expand=artist&_expand=type&_expand=condition&_expand=owner`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToPost)

        })
            .then(() => {
                console.log(dataToPost);
                return fetch(`http://127.0.0.1:8000/artwork/`)
                // return fetch(`http://localhost:5001/artwork?userId=${activeUser}&_expand=user`)
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
                    <label htmlFor="title"><h5>Add New Artwork</h5></label>

                    <div className="form-group">

                        <div className="img__upload">
                            <Dropzone
                                multiple={false}
                                accept="image/*"
                                onDrop={this.onImageDrop.bind(this)}
                            >
                                <p>Drop an image or click to select a file to upload.</p>
                            </Dropzone>
                        </div>

                        <div>
                            <div>
                                {this.state.uploadedFileCloudinaryUrl === '' ? null :
                                    <div>
                                        <p>{this.state.uploadedFile.name}</p>
                                        <img className="img__preview" src={this.state.uploadedFileCloudinaryUrl} />
                                    </div>}
                            </div>
                        </div>

                        <input id="title"
                            value={this.state.title}
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
                                value={this.state.typeId}
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
                                value={this.state.artistId}
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
                                value={this.state.conditionId}
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
                                value={this.state.ownerId}
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
                                value={this.state.notes}
                                onChange={this.handleFieldChange}
                                className="form-control art__notes">
                            </textarea>
                        </div>

                        <button type="button" onClick={this.postNewArtwork} className="btn btn-info btn-lg">Add</button>
                    </div>
                </form>
            </div >
        )
    }
}