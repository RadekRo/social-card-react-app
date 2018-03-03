import React, { Component } from 'react';

import TitleBar from "./TitleBar";
import TextContainer from "./TextContainer";
import Picture from "./Picture";

class SocialCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="social-card">
                    <TitleBar
                        name={ this.props.name }
                        email={ this.props.email }
                    />
                    <TextContainer
                        message={ this.props.message }
                    />
                    <Picture
                        graph={ this.props.graph }
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default SocialCard;