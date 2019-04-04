import React, { Component } from "react"
import "./login.css"


export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }.bind(this)

    // Handle for login submit
    handleLogin = function (e) {
        e.preventDefault()

        // Determine if a user already exists in API
        fetch(`https://art-archive-api.herokuapp.com/users?email=${this.state.email}`)
            .then(r => r.json())
            .then(user => {
                // User exists. Set local storage, and show gallery view
                if (user.length) {
                    this.props.setActiveUser(user[0].id)
                    this.props.showView("gallery")

                // User doesn't exist
                } else {
                    // Create user in API
                    fetch("https://art-archive-api.herokuapp.com/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({email: this.state.email, password: this.state.password})
                    })

                    // Set local storage with newly created user's id and show gallery view
                    .then(newUser => {
                        this.props.setActiveUser(newUser.id)
                        this.props.showView("gallery")
                    })
                }

            })
    }.bind(this)

    render() {
        return (
            <form className="form-signin" onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input onChange={this.handleFieldChange} type="email" id="email" className="form-control" placeholder="Email address" required="" autoFocus="" />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input onChange={this.handleFieldChange} type="password" id="password" className="form-control" placeholder="Password" required="" />
                <div className="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
            </form>
        )
    }
}
