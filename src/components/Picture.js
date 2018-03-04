import React, { Component } from 'react';

class Picture extends Component {
    render() {

        console.log(this.props);

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