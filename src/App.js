import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './nav/NavBar';
import Home from './Home';
import Login from './auth/Login';
import SearchResults from './search/SearchResults';

class App extends Component {

    state = {
        currentView: "login",
        searchTerms: "",
        activeUser: localStorage.getItem("yakId")
    }

    performSearch = function (terms) {
        this.setState({
            searchTerms: terms,
            currentView: "results"
        })
    }.bind(this)

    showView = function (e) {
        this.setState({
            currentView: e.target.id.split("__")[1]
        })
    }.bind(this)

    View = function () {
        if (localStorage.getItem("yakId") === null) {
            return <Login />
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
