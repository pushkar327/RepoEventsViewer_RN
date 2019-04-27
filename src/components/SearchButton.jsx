import React from 'react';
import PropTypes from 'prop-types';

export const SearchButton = ({ handleSearch }) => {
    return <button className="textbox margin-t-30 width-60 bold blueBg margin-b-20" type="button" onClick={handleSearch}>SEARCH</button>
}

SearchButton.propTypes = {
    handleSearch: PropTypes.func.isRequired,
}

SearchButton.defaultPropTypes = {
    handleSearch: () => {},
}