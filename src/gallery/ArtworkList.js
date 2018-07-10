import React, { Component } from "react"
import Artwork from "./Artwork"
import "./ArtworkList.css"


export default class ArtworkList extends Component {
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

    // componentDidMount(){
    //     this.props.displayAllArtwork()
    // }

    render() {

        return (

            <div>

                {
                    this.props.artwork.map(a =>
                        <button type="button" className="btn btn-outline-secondary btn__artists" id={this.props.id} onClick={this.toggleHidden.bind(this)}>
                            {a.artist.first_name} {a.artist.last_name}
                        </button>
                    )
                }
                {!this.state.isHidden &&

                    <div className="artworkList">
                        <h1 className="artworkList__header">My Collection</h1>
                        <div className="card-columns">
                            {
                                this.props.artwork.map(a => <Artwork className="col-sm" key={a.id} artwork={a} displayAllArtwork={this.props.displayAllArtwork} />)
                            }
                        </div>
                    </div>
                }

            </div>

        )
    }
}
