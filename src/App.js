import React, { Component } from 'react'
import './App.css'
import NavBar from './nav/NavBar';
import Home from './Home';
import Login from './auth/Login';
import SearchResults from './search/SearchResults';

class App extends Component {

    // Set initial state
    state = {
        currentView: "login",
        searchTerms: "",
        activeUser: localStorage.getItem("yakId")
    }

    // Search handler -> passed to NavBar
    performSearch = function (terms) {
        this.setState({
            searchTerms: terms,
            currentView: "results"
        })
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
    showView = function (e) {
        this.setState({
            currentView: (e.target) ? e.target.id.split("__")[1] : e
        })

        // If user clicked logout in nav, empty local storage and update activeUser state
        if (this.state.currentView === "logout") {
            this.setActiveUser(null)
        }
    }.bind(this)

    // Function to determine which main view to render
    View = function () {
        if (localStorage.getItem("yakId") === null) {
            return <Login showView={this.showView} setActiveUser={this.setActiveUser} />
        } else {
            switch(this.state.currentView) {
                case "home":
                    return <Home />
                    break
                case "logout":
                    return <Login showView={this.showView} setActiveUser={this.setActiveUser} />
                case "results":
                    return <SearchResults terms={this.state.searchTerms} />
                default:
                    return <Home />
            }
        }
    }

    render() {
        return (
            <div>
                <NavBar viewHandler={this.showView}
                        searchHandler={this.performSearch}
                        activeUser={this.state.activeUser}
                        setActiveUser={this.setActiveUser}
                />

                {this.View()}
            </div>
        )
    }
}

export default App
