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

    // View switcher -> passed to NavBar and Login
    showView = function (e) {
        if (e.target) {
            this.setState({
                currentView: e.target.id.split("__")[1]
            })
        } else {
            this.setState({
                currentView: e
            })
        }
    }.bind(this)

    // Function to determine which main view to render
    View = function () {
        if (localStorage.getItem("yakId") === null) {
            return <Login showView={this.showView} />
        } else {
            switch(this.state.currentView) {
                case "home":
                    return <Home />
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
                <NavBar viewHandler={this.showView} searchHandler={this.performSearch} />

                {this.View()}
            </div>
        )
    }
}

export default App
