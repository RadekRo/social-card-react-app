import React, { Component } from 'react';

import '../css/styles.css';

import TitleBar from "./TitleBar";
import TextContainer from "./TextContainer";
import Picture from "./Picture";

class App extends Component {

    state = {
        content: [
            { id: 1, user: 'test@wp.pl', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus ex mattis libero malesuada bibendum efficitur a enim. Nunc rutrum tellus et nunc consequat, posuere faucibus ante dictum.'  },
            { id: 2, user: 'nowy@onet.pl', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus ex mattis libero malesuada.'  },
            { id: 3, user: 'bull@gmail.com', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus ex mattis libero malesuada bibendum efficitur a enim. Nunc rutrum tellus et nunc consequat.'  },
            { id: 4, user: 'lady@bunga.it', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus ex mattis libero malesuada bibendum efficitur a enim. Nunc rutrum tellus et nunc consequat, posuere faucibus ante dictum.'  },
        ]
    };

  render() {
    return (
     <React.Fragment>
         <div id="theme">
             <img src="/images/title.png" alt="Social App icon" className="img-title" />
              Social Card Application
         </div>
         <div id="social-card">
            <TitleBar/><br/>
            <TextContainer/><br/>
            <Picture/>
         </div>
     </React.Fragment>
    );
  }
}

export default App;
