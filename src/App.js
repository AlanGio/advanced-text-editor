import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./components/control-panel/ControlPanel";
import FileZone from "./components/file-zone/FileZone";
import SynonymsBox from "./components/synonyms-box/SynonymsBox";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { getInitialText } from './redux/actions/text';
import { getSynonyms } from './redux/actions/synonyms';

class App extends Component {
    constructor(props) {
        super(props);
        props.actions.getInitialText();
        this.state = {
            selectedText: '',
        }
    }

    getSelectedTex = text => {
        if (text.length > 0 && text !==' ' && text.length < 15) {
            this.props.actions.getSynonyms(text);
            this.setState({ selectedText: text });
        }
    }

    replaceSynonym = (e) => {
        this.replaceSelectedText(e.currentTarget.textContent);
    };


    replaceSelectedText = (replacementText)  => {
        var range;
        if (window.getSelection) {
            const sel = window.getSelection();
            if (sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();
                range.insertNode(document.createTextNode(replacementText));
            }
        } else if (document.selection && document.selection.createRange) {
            range = document.selection.createRange();
            range.text = replacementText;
        }
    }

    render() {
        const { synonyms } = this.props;
        const { selectedText } = this.state;
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel
                        bold={() => this.bold()}
                        italic={() => this.italic()}
                        underline={() => this.underline()}
                    />
                    <FileZone 
                        text={this.props.text.text}
                        selectedText={(e) => this.getSelectedTex(e)}
                    />

                    <SynonymsBox
                        synonyms={synonyms}
                        selectedText={selectedText}
                        replaceSynonym={(e) => this.replaceSynonym(e)}
                    />
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.text,
    synonyms: state.synonyms,
});
  
const mapDispatchToProps = dispatch => ({
    actions: {
        getInitialText: bindActionCreators(getInitialText, dispatch),
        getSynonyms: bindActionCreators(getSynonyms, dispatch),
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(App);