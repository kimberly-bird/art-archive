import React, { Component } from "react"
import "./Conditions.css"

export default class Conditions extends Component {
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
                <button type="button" className="btn btn-outline-secondary btn__conditions" id={this.props.id} onClick={this.toggleHidden.bind(this)}>
                    {this.props.conditions.name}
                </button>
                {!this.state.isHidden &&
                    <div id="btn__conditions">
                        {
                            this.props.conditions.artwork.map(currentArt =>
                                <div className="card card__conditions">
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
                }
            </div>
        )
    }
}

