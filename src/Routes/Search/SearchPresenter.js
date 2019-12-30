import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchPresenter = (
    { movieResults,
        tvResults,
        handleSubmit,
        searchTerm,
        loading,
        error }
) => null;

SearchPresenter.prototype = {
    movieResults: PropTypes.array,
    popular: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    searchTerm: PropTypes.string,
}

export default SearchPresenter;
