import React, { Component } from "react"
import "./ArtworkDetail.css"

export default class ArtworkDetail extends Component {

    componentDidMount() {
        this.props.getArtworkDetails()
    }

    render() {

        return (
            <div>
                <div className="card">
                    <img className="card-img-top" alt="Card image cap"
                        src={this.props.artwork.image_url} />
                    <div className="overlay card-body">
                        <h2 className="card-title">{this.props.artwork.title}</h2>
                        <h2 className="card-subtitle mb-2"> Artist:{this.props.artwork.artist.first_name} {this.props.artwork.artist.first_name} | Year Signed:{this.props.artwork.year_signed}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

