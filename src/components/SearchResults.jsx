import React from 'react';
import PropTypes from 'prop-types';

const showEventsContent = (item, key) => {
    console.log("In showlog");
    return <><div id={key}>
        <div>Event Type : {item.type}</div>
       <div> {(null != item.actor) ?
                        <><div>Actor Information</div>
        <div>Avatar URL: {item.actor.avatar_url}</div>
        <div>Display Login: {item.actor.display_login}</div>
        <div>Gravatar Id: {item.actor.gravatar_id}</div>
        <div>Id: {item.actor.id}</div>
        <div>Login: {item.actor.login}</div>
        <div>Repository URL: {item.actor.url}</div></>
        : "" } </div>
         <div>Timestamp  : {item.created_at}</div>
    </div></>;
};

export const SearchResults = ({ eventDetails, requestedEvent }) => {
    const eventsArray = eventDetails && eventDetails.data;
    const matchingEvents = eventsArray && eventsArray.filter(item => (item.type === requestedEvent));
    return !!matchingEvents ?
        matchingEvents.map((item, index) => {
            console.log("item", item);
            const key = "uniqueId_" + index;
            return showEventsContent(item, key);
        })
        :
        <div>Sorry, no events found for the search criteria.</div>
};

SearchResults.propTypes = {
    eventDetails: PropTypes.shape({}).isRequired,
    requestedEvent: PropTypes.string.isRequired,
}

SearchResults.defaultPropTypes = {
    eventDetails: {},
    requestedEvent: "PushEvent",
}
