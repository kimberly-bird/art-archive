import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import NavBar from './nav/NavBar';
import Gallery from './gallery/Gallery';
import Login from './auth/Login';
import SearchResults from './search/SearchResults';
import AddArtwork from './gallery/AddArtwork';


class App extends Component {

    // Set initial state
    state = {
        currentView: "login",
        // searchTerms: "",
        activeUser: localStorage.getItem("yakId")
    }

    // Search handler -> passed to NavBar
    // performSearch = function (terms) {
    //     this.setState({
    //         searchTerms: terms,
    //         currentView: "results"
    //     })
    // }.bind(this)

    addArtwork = function (e) {
        console.log("button clicked");
        this.setState({ currentView: "addArtwork" })
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
                // case "results":
                //     return <SearchResults terms={this.state.searchTerms} />
                case "addArtwork":
                    return <AddArtwork showView={this.showView} />
                case "gallery":
                default:
                    return <Gallery activeUser={this.state.activeUser} />
            }
        }
    }

    render() {
        return (
            <article>
                <NavBar viewHandler={this.showView}
                    // searchHandler={this.performSearch}
                    activeUser={this.state.activeUser}
                    setActiveUser={this.setActiveUser}
                    newArtHandler={this.addArtwork}
                />

                {this.View()}
            </article>
        )
    }
}

export default App
