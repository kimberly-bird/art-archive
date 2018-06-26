import React, { Component } from "react"
import $ from "jquery"
import "./Artists.css"

export default class Artists extends Component {
    
    showHide  = function() {
       var x = document.getElementById("btn__artwork");
       if (x.style.display === "none") {
           x.style.display = "block";
       } else {
           x.style.display = "none";
       }
   }.bind(this)

    render() {

        return (
            <div>
                <button type="button" className="btn btn-outline-secondary btn__artists" id={this.props.id} onClick={this.showHide}>
                    {this.props.artists.first_name} {this.props.artists.last_name} |
                Birth Date {this.props.artists.dob} | Death Date {this.props.artists.death_date}
                </button>
                <div id="btn__artwork">
                    {
                        this.props.artists.artwork.map(currentArt =>
                            <div className="card">
                                <img src={currentArt.image_url} className="art__img card-img-top"></img>
                                <div className="card-body">
                                    <h4 className="card-title">{currentArt.title}</h4>
                                    <p className="card-text">{currentArt.year_signed} | {currentArt.location_created}</p>
                                    <p>{currentArt.notes}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

