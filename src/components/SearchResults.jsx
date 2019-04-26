import React from 'react';
import PropTypes from 'prop-types';

const showEventsContent = (item, index) => {
    return <><div key={generateUniqueId()} className="margin-t-10 border">
        <div key={generateUniqueId()}> {(null != item.actor) ?
            <>
                <h3 key={generateUniqueId()}>Event - {index+1} : Actor, Timestamp Information</h3>
                <div key={generateUniqueId()} className="borderTop"><div>
                    <label key={generateUniqueId()} className="bold">Avatar URL: </label>{item.actor.avatar_url}
                </div>
                    <div key={generateUniqueId()}>
                        <label className="bold">Display Login: </label>{item.actor.display_login}
                    </div>
                    {!!item.actor.gravatar_id ?
                        <div key={generateUniqueId()}>
                            <label className="bold">Gravatar Id: </label>{item.actor.gravatar_id}
                        </div>
                        : ""}
                    <div key={generateUniqueId()}>
                        <label className="bold">Id: </label>{item.actor.id}
                    </div>
                    <div key={generateUniqueId()}>
                        <label className="bold">Login: </label>{item.actor.login}
                    </div>
                    <div key={generateUniqueId()}>
                        <label className="bold">Repository URL: </label>{item.actor.url}
                    </div>
                    <div key={generateUniqueId()}>
                        <label className="bold">Timestamp: </label>{item.created_at}
                    </div>
                </div></>
            : ""} </div>

    </div></>;
};

export const SearchResults = ({ eventDetails, requestedEvent }) => {
    const eventsArray = eventDetails && eventDetails.data;
    const matchingEvents = eventsArray && eventsArray.filter(item => (item.type === requestedEvent));
    return !!matchingEvents ?
        <div className="mainComp center">
            <div className="header"> REPO EVENTS VIEWER APP </div>
            <div key={generateUniqueId()} className="padding-t-10"><h3>Event Type : <span className="margin-l-10">{requestedEvent}</span></h3></div>
            {matchingEvents.map((item, index) => {
                return showEventsContent(item, index);
            })}
        </div>
        :
        <div>Sorry, no events found for the search criteria.</div>
};

const generateUniqueId = () => {
    return Math.random().toString(36).slice(2);
}

SearchResults.propTypes = {
    eventDetails: PropTypes.shape({}).isRequired,
    requestedEvent: PropTypes.string.isRequired,
}

SearchResults.defaultPropTypes = {
    eventDetails: {},
    requestedEvent: "PushEvent",
}
