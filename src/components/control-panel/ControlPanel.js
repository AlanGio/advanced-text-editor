import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
    constructor(props) {
        super(props);
    }

    textFormat = format => {
        document.execCommand(format);
    }

    textColor = color => {
        document.execCommand('forecolor', false, color);
    }

    textIndent = type => {
        document.execCommand(type, true, null);
    }

    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button className="format-action" type="button" onClick={() => this.textFormat('bold')}><b>B</b></button>
                    <button className="format-action" type="button" onClick={() => this.textFormat('italic')}><i>I</i></button>
                    <button className="format-action" type="button" onClick={() => this.textFormat('underline')}><u>U</u></button>
                    &nbsp;
                    <button className="format-action" type="button" onClick={() => this.textIndent('indent')}>⇥</button>
                    <button className="format-action" type="button" onClick={() => this.textIndent('outdent')}>⇤</button>
                    &nbsp;
                    <button className="format-action-color red" type="button" onClick={() => this.textColor('red')}>&nbsp;</button>
                    <button className="format-action-color green" type="button" onClick={() => this.textColor('green')}>&nbsp;</button>
                    <button className="format-action-color blue" type="button" onClick={() => this.textColor('blue')}>&nbsp;</button>
                    <button className="format-action-color yellow" type="button" onClick={() => this.textColor('yellow')}>&nbsp;</button>

                </div>
            </div>
        );
    }
}

export default ControlPanel;
