import React from 'react';
import PropTypes from 'prop-types';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export const Results = ({ eventDetails, requestedEvent }) => {
    const eventsArray = eventDetails && eventDetails.data;
    const matchingEvents = eventsArray && eventsArray.filter(item => (item.type === requestedEvent));
    return (!!matchingEvents && matchingEvents.length !== 0) ?
        <div className="mainComp center">
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
                            return <TableRow key={generateUniqueId()}>
                                <TableCell component="th" scope="row" key={generateUniqueId()}>
                                    {item.actor.avatar_url}
                                </TableCell>
                                <TableCell align="right" key={generateUniqueId()}>{item.actor.display_login}</TableCell>
                                <TableCell align="right" key={generateUniqueId()}>{!!item.actor.gravatar_id ? item.actor.gravatar_id : "-"}</TableCell>
                                <TableCell align="right" key={generateUniqueId()}>{item.actor.id}</TableCell>
                                <TableCell align="right" key={generateUniqueId()}>{item.actor.login}</TableCell>
                                <TableCell align="right" key={generateUniqueId()}>{item.actor.url}</TableCell>
                                <TableCell align="right" key={generateUniqueId()}>{item.created_at}</TableCell>
                            </TableRow>
                        })
                        }
                    </TableBody>
                </Table>
            </Paper>

        </div>
        :
        <div className="error margin-b-20">Sorry, no events found for given search criteria. Please try again.</div>
};

//Duplication might occur once in 70 million times, so kind of safe to use.
const generateUniqueId = () => {
    return Math.random().toString(36).slice(2);
}

Results.propTypes = {
    eventDetails: PropTypes.shape({}).isRequired,
    requestedEvent: PropTypes.string.isRequired,
}

Results.defaultPropTypes = {
    eventDetails: {},
    requestedEvent: "PushEvent",
}
