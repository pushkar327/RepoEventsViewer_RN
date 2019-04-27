import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import axios from 'axios';
import { SearchResults } from './components/SearchResults';
import { LOADING, LOADED, ERROR } from './RepoEventsViewerStates';

export default class RepoEventsViewerApp extends Component {
    constructor(props) {
        super(props);
        this.state = LOADING;
        this.handleSearch = this.handleSearch.bind(this);
    }
    componentDidMount() {
        this.setState(LOADED);
    }
    handleSearch() {
        this.setState(LOADING);
        const httpClient = axios.create();
        httpClient.defaults.timeout = 5000;
        httpClient.get('https://api.github.com/repos/pushkar327/RepoEventsViewer_RN/events')
            .then(evtsResponse => {
                this.setState({ "eventDetails": evtsResponse, "loading": false, "loaded": true });
            }).catch((error) => {
                this.setState(ERROR);
                console.log(error);
            });
    }

    render() {
        let bodyContent = "";
        if (this.state.loading && !this.state.loaded) {
            bodyContent = <div className="mainComp center waitLayer loading">
                Loading</div>
        }
        else {
            bodyContent = (
                ((!this.state.eventDetails && !this.state.loading && this.state.loaded) || this.state.error) ?
                    (<div className="mainComp center">
                        <div className="header"> REPO EVENTS VIEWER APP </div>
                        <h3>
                            Hello User!
                        </h3>
                        <div className="center">
                            Please enter the following details to view the event details associated with your search:
                        </div>
                        <form id="repoDetails">
                            <div>
                                <div className="margin-t-20 bold">
                                    <label id="name">
                                        REPOSITORY NAME
                                </label>
                                </div>
                                <input className="textbox margin-10" type="text" name="repo" />
                                <div className="margin-t-10 bold">
                                    <label id="owner">
                                        REPOSITORY OWNER
                                </label>
                                </div>
                                <input className="textbox margin-10" type="text" name="owner" />
                                <div className="margin-t-10 bold">
                                    <label id="type" style={{ align: "left" }}>
                                        EVENT TYPE
                                </label>
                                </div>
                                <input className="textbox margin-10" type="text" name="eventType" />
                            </div>
                            <button className="textbox margin-t-30 width-60 bold blueBg margin-b-20" type="button" onClick={this.handleSearch}>SEARCH</button>
                        </form>
                        {
                            this.state.error ?
                                <div className="error margin-b-20">Sorry, no events found for given search criteria. Please try again.</div>
                                : ""
                        }

                    </div>

                    )
                    : this.state.eventDetails && this.state.loaded && !this.state.error &&
                    <SearchResults eventDetails={this.state.eventDetails} requestedEvent="PushEvent" />
            );
        }
        return bodyContent;
    }
}
ReactDOM.render(<RepoEventsViewerApp />, document.getElementById('root'));
