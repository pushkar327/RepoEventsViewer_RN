import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import { Header } from './components/Header';
import { LOADING, LOADED } from './RepoEventsViewerStates';
import Search from './components/Search';

export default class RepoEventsViewerApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...LOADING
        };
    }

    componentDidMount() {
        this.setState(LOADED);
    }

    render() {
       return (<div className="mainComp center">
            <Header />
            <Search />
        </div>);
    }
}
ReactDOM.render(<RepoEventsViewerApp />, document.getElementById('root'));
