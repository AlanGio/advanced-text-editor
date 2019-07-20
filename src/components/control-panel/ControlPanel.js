import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
    constructor(props) {
        super(props);
    }

    bold = () => {
        document.execCommand('bold');
    }

    italic = () => {
        document.execCommand('italic');
    }

    underline = () => {
        document.execCommand('underline');
    }

    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button className="format-action" type="button" onClick={() => this.bold()}><b>B</b></button>
                    <button className="format-action" type="button" onClick={() => this.italic()}><i>I</i></button>
                    <button className="format-action" type="button" onClick={() => this.underline()}><u>U</u></button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
