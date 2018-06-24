import React, { Component } from "react"
import artImg from "../images/art-archive.png"
import $ from "jquery"
import profilepic from "../images/profile.png"
import { Button } from "react-bootstrap"
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

    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" onClick={this.props.viewHandler} href="#">
                    <img id="nav__home" src={artImg} style={{ height: `75px` }} />
                </a>

                <Button className="addArtBtn" bsStyle="info" bsSize="large" onClick={this.addArtworkAffordance} >
                    +
                </Button>

                <a href="#" onClick={this.typesView}>Types</a>

                <a href="#" onClick={this.artistsView}>Artists</a>

                <a href="#" onClick={this.conditionsView}>Conditions</a>

                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" id="nav__profile"
                            onClick={this.props.viewHandler} href="#">
                            <img id="navimg__profile"
                                onClick={() => $(".profileMenu").slideToggle(333)}
                                src={profilepic} style={{ height: `30px` }} />
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
                        <div><a title="notifications" id="nav__notifications" href="#">Notifications</a></div>
                        <div><a title="notifications" id="nav__followers" href="#">My Followers</a></div>
                        <div><a title="notifications" id="nav__friends" href="#">My Friends</a></div>
                    </section>
                </article>
            </nav>
        )
    }
}
