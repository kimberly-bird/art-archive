import React, { Component } from "react"
import artImg from "../images/art_archive_logo.png"
import $ from "jquery"
import profilepic from "../images/art_profile.png"
import gallerypic from "../images/gallery.png"
import "./NavBar.css"


export default class NavBar extends Component {

    // Set initial state
    state = {
        currentView: ""
    }

    LoginLogout = () => {
        if (this.props.activeUser === null) {
            return <a className="nav-link" id="nav__login"
                onClick={this.props.viewHandler} href="#">Login</a>
        } else {
            return <a className="nav-link" id="nav__logout"
                onClick={this.props.viewHandler} href="#">Logout</a>
        }
    }

    // add artwork affordance 
    addArtworkAffordance = function (e) {
        e.preventDefault()
        this.props.newArtHandler(this.state.currentView)
        this.setState({ currentView: "addArtwork" })
    }.bind(this)

    typesView = function (e) {
        e.preventDefault()
        this.props.typeHandler(this.state.currentView)
        this.setState({ currentView: "types" })
    }.bind(this)

    artistsView = function (e) {
        e.preventDefault()
        this.props.artistHandler(this.state.currentView)
        this.setState({ currentView: "artists" })
    }.bind(this)

    conditionsView = function (e) {
        e.preventDefault()
        this.props.conditionHandler(this.state.currentView)
        this.setState({ currentView: "conditions" })
    }.bind(this)

    ownersView = function (e) {
        e.preventDefault()
        this.props.ownerHandler(this.state.currentView)
        this.setState({ currentView: "owners" })
    }.bind(this)

    render() {
        return (

            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-10 col-sm-12 mr-0" onClick={this.props.viewHandler} href="#">
                    <img id="nav__home" src={artImg} style={{ height: `75px` }} />
                </a>

                <ul className="navbar-nav">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" onClick={this.addArtworkAffordance} href="#">
                            <img id="navimg__gallery" src={gallerypic} style={{ height: `50px` }}></img>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" id="nav__profile"
                            onClick={this.props.viewHandler} href="#">
                            <img id="navimg__profile"
                                onClick={() => $(".profileMenu").slideToggle(333)}
                                src={profilepic} style={{ height: `50px` }} />
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav px-3" id="nav__log">
                    <li className="nav-item text-nowrap">
                        <this.LoginLogout />
                    </li>
                </ul>
                <article className="profileMenu">
                    <section className="profileMenu__item">
                        <div>Filter by</div>
                        <div><a href="#" onClick={this.artistsView}>Artist</a></div>
                        <div><a href="#" onClick={this.ownersView}>Owner</a></div>
                        <div><a href="#" onClick={this.typesView}>Type</a></div>
                        <div><a href="#" onClick={this.conditionsView}>Condition</a></div>
                    </section>
                </article>
            </nav>
        )
    }
}
