import React from 'react';
import PropTypes from 'prop-types';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export const SearchResults = ({ eventDetails, requestedEvent, goBack }) => {
    const eventsArray = eventDetails && eventDetails.data;
    const matchingEvents = eventsArray && eventsArray.filter(item => (item.type === requestedEvent));
    return !!matchingEvents ?
        <div className="mainComp center">
            <div className="header"> REPO EVENTS VIEWER APP </div>
            <div key={generateUniqueId()} className="padding-t-10"><h3>Event Type : <span className="margin-l-10">{requestedEvent}</span></h3></div>
            <Paper className="root">
                <Table className="table" >
                    <TableHead>
                        <TableRow>
                            <TableCell>Avatar URL</TableCell>
                            <TableCell align="right">Display Login</TableCell>
                            <TableCell align="right">Gravatar Id</TableCell>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Login</TableCell>
                            <TableCell align="center">Repository URL</TableCell>
                            <TableCell align="center">Timestamp</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {matchingEvents.map((item, index) => {
                            return <TableRow key="">
                                <TableCell component="th" scope="row">
                                    {item.actor.avatar_url}
                                </TableCell>
                                <TableCell align="right">{item.actor.display_login}</TableCell>
                                <TableCell align="right">{!!item.actor.gravatar_id ? item.actor.gravatar_id : "-"}</TableCell>
                                <TableCell align="right">{item.actor.id}</TableCell>
                                <TableCell align="right">{item.actor.login}</TableCell>
                                <TableCell align="right">{item.actor.url}</TableCell>
                                <TableCell align="right">{item.created_at}</TableCell>
                            </TableRow>
                        })
                        }
                    </TableBody>
                </Table>
            </Paper>

        </div>
        :
        <div className="mainComp center">
            <div className="header">
                REPO EVENTS VIEWER APP
            </div>
            <div className="margin-t-40">Sorry, no events found for the search criteria. Please click on "Go Back" to continue your search using other criteria.</div>
            <button className="textbox margin-t-30 width-60 bold blueBg margin-b-20" type="button">Go Back</button>
        </div>
};

const generateUniqueId = () => {
    return Math.random().toString(36).slice(2);
}

SearchResults.propTypes = {
    eventDetails: PropTypes.shape({}).isRequired,
    requestedEvent: PropTypes.string.isRequired,
    goBack: PropTypes.func.isRequired,
}

SearchResults.defaultPropTypes = {
    eventDetails: {},
    requestedEvent: "PushEvent",
    goBack: () => {},
}
