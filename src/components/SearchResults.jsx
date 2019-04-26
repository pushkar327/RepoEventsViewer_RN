import React from 'react';
import PropTypes from 'prop-types';

export const SearchResults = ({eventArray, requestedEvent}) => {
   return !!eventArray && eventArray.map((item, index) => {
        let bodyContent = "";
        const key = "uniqueId_"+index;
        if(item.type === requestedEvent){
            bodyContent += <div id={key}>
               <div>Event Type : {item.type}</div>
              (null != item.actor) ? 
                <div>Actor Information</div>
                <div>Avatar URL: {item.actor.avatar_url}</div>
                <div>Display Login: {item.actor.display_login}</div>
                <div>Gravatar Id: {item.actor.gravatar_id}</div>
                <div>Id: {item.actor.id}</div>
                <div>Login: {item.actor.login}</div>
                <div>Repository URL: {item.actor.url}</div>
                : <div></div>
                <div>Timestamp  : {item.created_at}</div> 
            </div>;
        }
    });
};

SearchResults.propTypes = {
    eventArray: PropTypes.shape({}).isRequired,
    requestEvent: PropTypes.string.isRequired,
}

SearchResults.defaultPropTypes = {
    eventArray: [],
    requestedEvent: "PushEvent",
}
