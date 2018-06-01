import React, { Component } from "react"
import "./login.css"


export default class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    handleFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }.bind(this)

    handleLogin = function (e) {
        e.preventDefault()

        fetch(`http://localhost:5001/users?email=${this.state.email}`)
            .then(r => r.json())
            .then(user => {
                if (user.length) {
                    localStorage.setItem("yakId", user[0].id)
                    this.props.showView("home")
                } else {
                    fetch("http://localhost:5001/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({email: this.state.email, password: this.state.password})
                    })
                    .then(newUser => {
                        localStorage.setItem("yakId", newUser.id)
                        this.props.showView("home")
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
