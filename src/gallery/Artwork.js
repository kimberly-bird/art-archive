import React, { Component } from "react"
import "./Artwork.css"

export default class Artwork extends Component {
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
                {/* <button type="button" className="btn btn-outline-secondary btn__artists" id={this.props.id} onClick={this.toggleHidden.bind(this)}>
                    {this.props.artwork.artist.first_name} {this.props.artwork.artist.last_name}
                </button>

                {!this.state.isHidden && */}
                    <div className="card hovereffect">
                        <img className="card-img-top" alt="Card image cap"
                            src={this.props.artwork.image_url} />
                        <div className="overlay card-body">
                            <h2 className="card-title">{this.props.artwork.title}</h2>
                            <h2 className="card-subtitle mb-2">Luther Johnson | {this.props.artwork.year_signed}</h2>
                            <p>
                                <button type="button" className="btn btn-secondary"><a href="#">Details</a></button>
                            </p>
                        </div>
                    </div>
                {/* } */}

            </div>
        )
    }
}

