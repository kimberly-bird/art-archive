import React, { Component } from "react"
import Artists from "./Artists"
import "./Artists.css"

export default class ArtistsList extends Component {
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
                <h1 className="artistList__header">Types of Artwork</h1>
                <div className="container">
                    <div className="row">
                        {
                            this.props.artists.map(t => <Artists getArtists={this.props.getArtists} className="col-sm" key={t.id} artists={t} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}
