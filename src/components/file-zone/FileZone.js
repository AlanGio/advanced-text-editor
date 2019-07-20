import React, { Component } from 'react';
import './FileZone.css';

class FileZone extends Component {
    constructor(props) {
        super(props);
    }

    selectText = () => {
        const { selectedText } = this.props;
        selectedText(window.getSelection().toString());
    };
      
    render() {
        return (
            <div id="file-zone">
                <div id="file">
                    <p contentEditable={true} suppressContentEditableWarning={true} onMouseUp={() => this.selectText()}>
                        {this.props.text}
                    </p>
                </div>
            </div>
        );
    }
}

export default FileZone;
