import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../app.css';
import { REPO_NAME_INVALID, REPO_OWNER_INVALID, 
    EVENT_TYPE_INVALID, FIELDS_VALID, LOADING } from '../RepoEventsViewerStates';

 export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repoName: "",
            repoOwner: "",
            eventType: "",
            repoNameError: false,
            repoOwnerError: false,
            eventTypeError: false,
            validateFields: this.validateFields.bind(this),
            handleSearch: this.handleSearch.bind(this),
            handleChange: this.handleChange.bind(this),
        }
    }

    handleSearch(){
        this.setState(LOADING);
        if (this.validateFields(this.state.repoName, this.state.repoOwner, this.state.eventType)) {
           this.props.callEventsAPI();
        }
    }

    handleChange(e){
        if(e.target.name === "repoName") {
            this.setState({ repoName: e.target.value });
        } else if(e.target.name === "repoOwner"){
            this.setState({ repoOwner: e.target.value });
        } else if(e.target.name === "eventType"){
            this.setState({ eventType: e.target.value});
        }
    }

    validateFields(repoName, repoOwner, eventType) {
        const isEventTypeInvalid= (eventType == null || eventType.length === 0) ? true : false;
        if(isEventTypeInvalid) this.setState(EVENT_TYPE_INVALID);

        const isRepoOwnerInvalid = (repoOwner == null || repoOwner.length === 0) ? true : false;
        if(isRepoOwnerInvalid) this.setState(REPO_OWNER_INVALID);

        const isRepoNameInvalid = (repoName == null || repoName.length === 0) ? true : false;
        if(isRepoNameInvalid) this.setState(REPO_NAME_INVALID);

        const isAllValid = !(isRepoNameInvalid || isRepoOwnerInvalid || isEventTypeInvalid);
        if(isAllValid) this.setState(FIELDS_VALID);
        
        return isAllValid;
    }

    render(){ return (<div>     <h3>
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
                <input className={"textbox margin-10 "+(this.state.repoNameError ? "errorBorder" : "")} 
                    type="text" name="repoName" onChange = {this.state.handleChange}/>
                {this.state.repoNameError ? <div className="error">Repository Name cannot be empty</div> : ""}
                <div className="margin-t-10 bold">
                    <label id="owner">
                        REPOSITORY OWNER
                                </label>
                </div>
                <input className={"textbox margin-10 "+(this.state.repoOwnerError ? "errorBorder" : "")}
                    type="text" name="repoOwner" onChange = {this.state.handleChange}/>
                {this.state.repoOwnerError ? <div className="error">Repository Owner cannot be empty</div> : ""}
                <div className="margin-t-10 bold">
                    <label id="type" style={{ align: "left" }}>
                        EVENT TYPE
                                </label>
                </div>
                <input className={"textbox margin-10 "+(this.state.eventTypeError ? "errorBorder" : "")}
                    type="text" name="eventType" onChange = {this.state.handleChange}/>
                {this.state.eventTypeError ? <div className="error">Event Type cannot be empty</div> : ""}
            </div>
            <button className="textbox margin-t-30 width-60 bold blueBg margin-b-20" type="button" onClick={this.state.handleSearch}>SEARCH</button>

        </form></div>);
};
}


SearchForm.propTypes = {
    callEventsAPI: PropTypes.func.isRequired,
}

SearchForm.defaultPropTypes = {
    callEventsAPI: () => {},
}