import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ControlPanel from './components/control-panel/ControlPanel';
import FileZone from './components/file-zone/FileZone';
import SynonymsBox from './components/synonyms-box/SynonymsBox';

import { getInitialText } from './redux/actions/text';
import { getSynonyms } from './redux/actions/synonyms';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    props.actions.getInitialText();
    this.state = {
      selectedText: '',
    };
  }

  getSelectedTex(text) {
    const { actions } = this.props;

    if (text.length > 0 && text !== ' ' && text.length < 20) {
      actions.getSynonyms(text);
      this.setState({ selectedText: text });
    }
  }

  replaceSynonym(text) {
    let range;
    if (window.getSelection) {
      const sel = window.getSelection();
      if (sel.rangeCount) {
        range = sel.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(text));
      }
    } else if (document.selection && document.selection.createRange) {
      range = document.selection.createRange();
      range.text = text;
    }
  }

  render() {
    const { synonyms, text } = this.props;
    const { selectedText } = this.state;

    return (
      <div className="App">
        <header>
          <span>Simple Text Editor</span>
        </header>
        <main>
          <ControlPanel />
          <FileZone
            text={text.text}
            selectedText={e => this.getSelectedTex(e)}
          />

          {selectedText !== '' && (
            <SynonymsBox
              synonyms={synonyms}
              selectedText={selectedText}
              replaceSynonym={e => this.replaceSynonym(e)}
            />
          )}
        </main>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.shape({
    getInitialText: PropTypes.func,
    getSynonyms: PropTypes.func,
  }),
  text: PropTypes.shape({
    error: PropTypes.string,
    text: PropTypes.string,
  }),
  synonyms: PropTypes.shape({
    data: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool,
  }),
  getSynonyms: PropTypes.func,
};

App.defaultProps = {
  actions: {},
  text: {},
  synonyms: {},
  getSynonyms: () => {},
};

const mapStateToProps = state => ({
  text: state.text,
  synonyms: state.synonyms,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getInitialText: bindActionCreators(getInitialText, dispatch),
    getSynonyms: bindActionCreators(getSynonyms, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
