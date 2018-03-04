import React, { Component } from 'react';

import TitleBar from "./TitleBar";
import TextContainer from "./TextContainer";
import Picture from "./Picture";

class SocialCard extends Component {
    render() {
       return (
                <div id="social-card">
                    <TitleBar
                        user={ this.props.user }
                        email={ this.props.email }
                    />
                    <TextContainer
                        message={ this.props.message }
                    />
                    <Picture
                        img={ this.props.img }
                    />
                </div>
        );
    }
}

export default SocialCard;