import React, { Component } from "react"
import "./Artwork.css"

export default class Artwork extends Component {
    render() {
        return (

            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="hovereffect">
                    <img class="img-responsive" alt="Card image cap"
                        src={this.props.artwork.image_url} />
                    <div class="overlay">
                        <h2 className="card-title">{this.props.artwork.title}</h2>
                        <h2 className="card-subtitle mb-2">Artist Name | {this.props.artwork.year_signed}</h2>
                        <p className="card-text">{this.props.artwork.notes}</p>
                        <p>
                            <button type="button" class="btn btn-secondary"><a href="#">Details</a></button>
                        </p>
                        {/* <div>
                            Type: {this.props.artwork.typeId} |
                            Size: {this.props.artwork.size} |
                            Framed?: {this.props.artwork.framed} |
                            Condition: {this.props.artwork.conditionId} |
                            Current Owner: {this.props.artwork.ownerId}
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

