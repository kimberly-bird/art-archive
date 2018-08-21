import React, { Component } from "react"
import Artwork from "./Artwork"
import "./ArtworkList.css"


export default class ArtworkList extends Component {


    render() {

        return (

            <div>
                    <div className="artworkList">
                        <h1 className="artworkList__header">My Collection</h1>
                        <div className="card-columns">
                            {
                                this.props.artwork.map(a => <Artwork showView={this.props.showView} className="col-sm" id={this.props.artwork.id} key={a.id} artwork={a} displayAllArtwork={this.props.displayAllArtwork} />)
                            }
                        </div>
                    </div>
            </div>
        )
    }
}
