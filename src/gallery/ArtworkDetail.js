import React, { Component } from "react"
import "./ArtworkDetail.css"

const ArtworkDetail = (props) => {

    return (
        <div className="detail-card">
            <button type="button" className="btn btn-outline-secondary">Edit Artwork</button>
            <button type="button" className="btn btn-outline-secondary">Delete Artwork</button>

            <div className="card-columns">
                <div className="card border-secondary text-center p-3">
                    <h2>{props.viewProps.artwork.title}</h2>
                    <h4>by {props.viewProps.artwork.artist.first_name} {props.viewProps.artwork.artist.last_name}</h4>
                    <p>{props.viewProps.artwork.year_signed}</p>
                </div>

                <div className="card">
                    <img className="card-img" alt="Card image cap"
                        src={props.viewProps.artwork.image_url} />
                </div>

                <div className="card border-secondary text-center p-3">
                    <p>Location Created: {props.viewProps.artwork.location_created}</p>
                    <p>Size: {props.viewProps.artwork.size}</p>
                    <p>Notes: {props.viewProps.artwork.notes}</p>
                </div>

                <div className="card border-secondary text-center p-3">
                    <p>Condition: {props.viewProps.artwork.condition.name}</p>
                    <p>Current Owner: {props.viewProps.artwork.owner.first_name} {props.viewProps.artwork.owner.last_name}</p>
                    <p>Type of art: {props.viewProps.artwork.type.name}</p>
                </div>
            </div>
        </div>
    )
}

export default ArtworkDetail

