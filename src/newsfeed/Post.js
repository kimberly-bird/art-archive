import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Post.css"


export default class Post extends Component {
    render() {
        return (
            <div className="card post">
                <div className="card-body">
                    <h5 className="card-title">By {this.props.post.user.email}</h5>
                    <p className="card-text">
                        {this.props.post.message}
                    </p>
                    <a href="#" className="btn btn-outline-success">Like</a>
                </div>
            </div>
        )
    }
}
