import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import NavBar from './nav/NavBar';
import Gallery from './gallery/Gallery';
import Login from './auth/Login';
import AddArtwork from './gallery/AddArtwork';
import TypeList from "./types/TypeList"

// get logged in userId
const activeUser = localStorage.getItem("yakId")

class App extends Component {

    // Set initial state
    state = {
        currentView: "login",
        activeUser: localStorage.getItem("yakId"),
        artwork: [],
        response: [],
        types: []
    }

    // API Manager
    getAll = function (resource, view) {
        fetch(`http://localhost:5001/${resource}`)
            .then(r => r.json())
            .then(response =>
                this.setState({
                    response: response,
                    currentView: view
                })
            )
        }

    ///////////////////////////////////

    getTypes = function (e) {
        fetch("http://localhost:5001/types")
        .then(r => r.json())
        .then(response =>
            this.setState({
                types: response,
                // currentView: "types"
            })
        )
    }.bind(this)

    componentDidMount() {
        this.getTypes()
    }

    displayAllArtwork = function () {
        fetch(`http://localhost:5001/artwork?userId=${activeUser}&_expand=user&_sort=title&_order=desc`)
            .then(r => r.json())
            .then(artwork =>
                this.setState({
                    artwork: artwork,
                    currentView: "gallery"
                })
            )
    }.bind(this)

    addArtwork = function (e) {
        this.setState({ currentView: "addArtwork" })
    }.bind(this)

    getAllTypes = function (e) {
        this.setState({ currentView: "types" })
    }.bind(this)

    // Function to update local storage and set activeUser state
    setActiveUser = (val) => {
        if (val) {
            localStorage.setItem("yakId", val)
        } else {
            localStorage.removeItem("yakId")
        }
        this.setState({
            activeUser: val
        })
    }

    // View switcher -> passed to NavBar and Login
    // Argument can be an event (via NavBar) or a string (via Login)
    showView = function (e) {
        let view = null

        // Click event triggered switching view
        if (e.hasOwnProperty("target")) {
            view = e.target.id.split("__")[1]

            // View switch manually triggered by passing in string
        } else {
            view = e
        }

        // If user clicked logout in nav, empty local storage and update activeUser state
        if (view === "logout") {
            this.setActiveUser(null)
        }

        // Update state to correct view will be rendered
        this.setState({
            currentView: view
        })

    }.bind(this)

    // Function to determine which main view to render
    View = () => {
        if (localStorage.getItem("yakId") === null) {
            return <Login showView={this.showView} setActiveUser={this.setActiveUser} />
        } else {
            switch (this.state.currentView) {
                case "logout":
                    return <Login showView={this.showView} setActiveUser={this.setActiveUser} />
                case "addArtwork":
                    return <AddArtwork showView={this.showView} displayAllArtwork={this.displayAllArtwork} types={this.state.types} />
                case "types":
                    return <TypeList showView={this.showView} getTypes={this.getTypes} types={this.state.types}/>
                case "gallery":
                default:
                    return <Gallery activeUser={this.state.activeUser} displayAllArtwork={this.displayAllArtwork} artwork={this.state.artwork} getTypes={this.getTypes} />
            }
        }
    }

    render() {
        return (
            <article>
                <NavBar viewHandler={this.showView}
                    activeUser={this.state.activeUser}
                    setActiveUser={this.setActiveUser}
                    newArtHandler={this.addArtwork}
                    displayAllArtwork={this.displayAllArtwork}
                    typeHandler={this.getAllTypes}
                />

                {this.View()}
            </article>
        )
    }
}

export default App
