import React, { Component } from "react"
import Artwork from "./Artwork"
import "./ArtworkList.css"


export default class ArtworkList extends Component {
    render() {
        return (
            <div className="artworkList">
                <h1 className="artworkList__header">Gallery</h1>
                <div className="container">
                    <div className="row">
                        {
                            this.props.artwork.map(a => <Artwork className="col-sm" key={a.id} artwork={a} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}
