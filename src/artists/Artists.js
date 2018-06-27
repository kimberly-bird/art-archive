import React, { Component } from "react"
import "./Artists.css"

export default class Artists extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isHidden: true
        }
    }
    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {

        return (
            <div>
                <button type="button" className="btn btn-outline-secondary btn__artists" id={this.props.id} onClick={this.toggleHidden.bind(this)}>
                    {this.props.artists.first_name} {this.props.artists.last_name}
                    {/* | */}
                    {/* Birth Date {this.props.artists.dob} | Death Date {this.props.artists.death_date} */}
                </button>
                {!this.state.isHidden &&
                    <div id="btn__artwork">
                        <div className="card-columns">
                            {
                                this.props.artists.artwork.map(currentArt =>
                                    <div className="card card__artists">
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
                }
            </div>
        )
    }
}

