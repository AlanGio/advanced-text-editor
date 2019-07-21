import PropTypes from 'prop-types';
import React from 'react';
import './SynonymsBox.css';

const SynonymsBox = ({ synonyms, selectedText, replaceSynonym }) => {
  return (
    <div id="synonyms-box">
      <h3>{synonyms && synonyms.loading && `Loading ${selectedText} Synonyms`}</h3>
      <h3>{!synonyms.loading && selectedText && `${selectedText} Synonyms`}</h3>
      <ul id="list">
          {synonyms && !synonyms.loading && synonyms.data.map(({ word, score }) => (
              <li key={`${score}_${word}`}>
                <button onClick={(e) => replaceSynonym(e)}>{word}</button>
              </li>
          ))}
      </ul>
    </div>
  );
};

SynonymsBox.propTypes = {
  synonyms: PropTypes.object,
  selectedText: PropTypes.string,
};

SynonymsBox.defaultProps = {
  synonyms: {},
  selectedText: '',
};

export default SynonymsBox;