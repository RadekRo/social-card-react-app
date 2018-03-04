import React, { Component } from 'react';

class Picture extends Component {
    render() {

        const pictureLink = '/images/' + this.props.img + '.jpg';

        return (
            <div id="picture">
                <img
                    src={ pictureLink }
                    alt="added by user"
                />
            </div>
        );
    }
}

export default Picture;