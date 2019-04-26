import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import axios from 'axios';
import { SearchResults } from './components/SearchResults';

export default class RepoEventsViewerApp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch() {
        console.log('Inside onsubmit');
        axios.get('https://api.github.com/repos/pushkar327/RepoEventsViewer_RN/events')
        .then(evtsResponse => {
          var eventArray = evtsResponse.data;
          eventArray.map((item, index) => {
              console.log("Item: ", item, "Index: ", index);
          });
          
        });
    }
    render() {
        return (
            <div className="mainComp center">
                <div className="header"> REPO EVENTS VIEWER APP </div>
                <h3>
                    Hello User!
                </h3>
                <div className="center">
                    Please enter the following details to view the event details associated with your search:
                </div>
                <div>
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
                                <label id="type" style={{align:"left"}}>
                                    EVENT TYPE
                                </label>
                            </div>
                            <input className="textbox margin-10" type="text" name="eventType"/>
                        </div>
                        <button className="textbox margin-t-30 width-60 bold blueBg margin-b-20" type="button" onClick={this.handleSearch}>SEARCH</button>
                    </form>
                </div>
                <SearchResults/>
            </div>
        );
    }
}




ReactDOM.render(<RepoEventsViewerApp />, document.getElementById('root'));
