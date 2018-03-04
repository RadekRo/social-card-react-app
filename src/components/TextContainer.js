import React, { Component } from 'react';

class TextContainer extends Component {
    render() {
        return (
            <div id="text-container">
                { this.props.message }
            </div>
        );
    }
}

export default TextContainer;