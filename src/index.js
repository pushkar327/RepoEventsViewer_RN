import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import axios from 'axios';
import { SearchResults } from './components/SearchResults';
import { Header } from './components/Header';
import { LOADING, LOADED, ERROR } from './RepoEventsViewerStates';
import { SearchForm } from './components/SearchForm';
import { Loading } from './components/Loading';
import { SearchButton } from './components/SearchButton';

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
            bodyContent = (<div className="mainComp center"><Header/><SearchForm/><Loading/></div>);
        }
        else {
            bodyContent = (
                ((!this.state.eventDetails && !this.state.loading && this.state.loaded) || this.state.error) ?
                    (<div className="mainComp center">
                        <Header/>
                        <SearchForm/>
                        <SearchButton handleSearch={this.handleSearch}/>
                        {
                            this.state.error ?
                                <div className="error margin-b-20">Sorry, no events found for given search criteria. Please try again.</div>
                                : ""
                        }
                    </div>

                    )
                    : this.state.eventDetails && this.state.loaded && !this.state.error &&
                     (<div className="mainComp center">
                        <Header/>
                        <SearchForm/>
                        <SearchButton handleSearch={this.handleSearch}/>
                        <SearchResults eventDetails={this.state.eventDetails} requestedEvent="PushEvent" />
                     </div>)
            );
        }
        return bodyContent;
    }
}
ReactDOM.render(<RepoEventsViewerApp />, document.getElementById('root'));
