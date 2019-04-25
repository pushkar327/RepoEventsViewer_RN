import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FunctionalComponent as Introduction } from './components/SearchResults';
import './app.css';

export default class RepoEventsViewerApp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="mainComp center">
                <div className="header"> REPO EVENTS VIEWER APP </div>
                <h3 className="">
                    Hello User!
                </h3>
                <div className="center">
                    Please enter the following details to view the event details associated with your search:
                </div>
                <div>
                    <form id="repoDetails">
                        <div>
                            <div className="margin-t-20 bold">
                                <label for="name">
                                    REPOSITORY NAME
                                </label>
                            </div>
                            <input className="textbox margin-10" type="text" name="repo" />
                            <div className="margin-t-10 bold">
                                <label for="owner">
                                    REPOSITORY OWNER
                                </label>
                            </div>
                            <input className="textbox margin-10" type="text" name="owner" />
                            <div className="margin-t-10 bold">
                                <label for="type" style={{align:"left"}}>
                                    EVENT TYPE
                                </label>
                            </div>
                            <input className="textbox margin-10" type="text" name="eventType" />
                        </div>
                        <button className="textbox margin-t-30 width-60 bold blueBg margin-b-20" type="submit">SEARCH</button>
                    </form>
                </div>
            </div>
        );
    }
}




ReactDOM.render(<RepoEventsViewerApp />, document.getElementById('root'));
