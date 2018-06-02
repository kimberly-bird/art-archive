import React, { Component } from "react"
import "./SearchResults.css"
import Avatar from "../images/avatar.png"


export default class SearchResults extends Component {

    state = {
        posts: [],
        users: [],
        events: []
    }

    componentDidMount() {
        const newState = {}
        fetch(`http://localhost:5001/posts?q=${encodeURI(this.props.terms)}&_expand=user`)
            .then(r => r.json())
            .then(posts => {
                newState.posts = posts
                return fetch(`http://localhost:5001/users?q=${encodeURI(this.props.terms)}`)
            })
            .then(r => r.json())
            .then(users => {
                newState.users = users
                this.setState(newState)
            })
    }

    render() {
        return (
            <div className="searchResults">
                <h1>Search Results</h1>

                {
                    this.state.posts.map(p =>
                        <div className="card post">
                            <div className="card-body">
                                <h5 className="card-title">By {p.user.email}</h5>
                                <p className="card-text">
                                    {p.message}
                                </p>
                                <a href="#" className="btn btn-outline-success">Like</a>
                            </div>
                        </div>
                    )
                }

                {
                    this.state.users.map(u =>
                        <div className="card">
                            <img className="card-img-top avatar" src={Avatar} alt="Generic person image" />
                            <div className="card-body">
                                <h5 className="card-title">{u.email}</h5>
                                <a href="#" className="btn btn-outline-success">View profile</a>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
