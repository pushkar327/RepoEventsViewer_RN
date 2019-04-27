import React from 'react';
import PropTypes from 'prop-types';
import { Loading } from './Loading';
import { SearchButton } from './SearchButton';

export const SearchForm = () => {
    return (<div>     <h3>
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
        </form></div>);
};
