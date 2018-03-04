import React, { Component } from 'react';

import '../css/styles.css';
import SocialCard from "./SocialCard";

class App extends Component {

    state = {
        contents: [],
        error: null
    };

    componentDidMount() {
        fetch('/data/userMessages.json')
            .then(response => response.json())
            .then(data => this.setState({ contents: data }))
            .catch(error => this.setState({ error }))
    }

  render() {
    return (
     <React.Fragment>
         <div id="theme">
             <img src="/images/title.png" alt="Social App icon" className="img-title" /><br/>
              Social Card Application
         </div>
             { this.state.error && <p>{ this.state.error.message }</p> }

             { this.state.contents.map(content =>
                 <SocialCard
                     user={ content.user }
                     message={ content.info }
                     email={ content.email }
                     img={ content.id }
                     key={ content.id }
                 />
             ) }
     </React.Fragment>
    );
  }
}

export default App;
