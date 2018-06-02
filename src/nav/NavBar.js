import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import yak from "../images/yak.png"


export default class NavBar extends Component {

    // Set initial state
    state = {
        searchTerms: ""
    }

    /**
     * Local search handler, which invokes the searchHandler reference
     * passed from App
     */
    search = function (e) {
        e.preventDefault()
        this.props.searchHandler(this.state.searchTerms)
        this.setState({searchTerms: ""})
    }.bind(this)

    LoginLogout = () => {
        if (this.props.activeUser === null) {
            return <a className="nav-link" id="nav__login" onClick={this.props.viewHandler} href="#">Login <span className="sr-only">(current)</span></a>
        } else {
            return <a className="nav-link" id="nav__logout" onClick={this.props.viewHandler} href="#">Logout <span className="sr-only">(current)</span></a>
        }
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" id="nav__home" onClick={this.props.viewHandler} href="#">
                    <img src={yak} style={{height: `50px`}} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <this.LoginLogout/>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="nav__profile" onClick={this.props.viewHandler} href="#">Profile</a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0" onSubmit={this.search}>
                        <input id="searchTerms"
                               onChange={this.handleFieldChange}
                               className="form-control mr-sm-2"
                               type="search"
                               placeholder="Search"
                               aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}
