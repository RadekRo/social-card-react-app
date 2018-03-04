import React, { Component } from 'react';

class TitleBar extends Component {

    render() {

        const userIcon = 'https://api.adorable.io/avatars/285/'
            + this.props.email.split('.')[0] + '.png';

        return (
            <div id="title-bar">
                <img
                    src={ userIcon }
                    className="img-title titlebar-image"
                    alt="user icon"
                />
                <div id="title-bar-description">
                { this.props.user } <span>dodał/a nowe zdjęcie.<br/>
                    2 godz.</span>
                </div>
            </div>
        );
    }
}

export default TitleBar;