import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./components/control-panel/ControlPanel";
import FileZone from "./components/file-zone/FileZone";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { getInitialText } from './redux/actions/text';
import { getSynonyms } from './redux/actions/synonyms';

class App extends Component {
    constructor(props) {
        super(props);
        props.actions.getInitialText();
    }

    getSelectedTex = text => {
        if (text.length > 0) {
            this.props.actions.getSynonyms(text);
        }
    }

    render() {
        console.log(this.props.synonyms);
        const { synonyms } = this.props;
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

                    <div>
                        <div>{synonyms && synonyms.loading && 'Loading'}</div>
                        <ul>
                            {synonyms && !synonyms.loading && synonyms.data.map(({ word, score }) => (
                                <li key={score}>{word}</li>
                            ))}
                        </ul>
                    </div>
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