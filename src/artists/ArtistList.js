import React, { Component } from "react"
import Artists from "./Artists"
import "./Artists.css"

export default class ArtistList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            artists: []
        }
    }

    componentDidMount() {
        this.props.getArtists()
    }

    render() {
        return (
            <div className="artistList">
                <h1 className="artistList__header">Artists</h1>
                <div className="container">
                    <div className="row">
                        {
                            this.props.artists.map(a =>
                                <Artists getArtists={this.props.getArtists} className="col-sm" key={a.id} artists={a} id={a.id} />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}
