import React, { Component } from 'react';

import '../css/styles.css';

import TitleBar from "./TitleBar";
import TextContainer from "./TextContainer";
import Picture from "./Picture";
import SocialCard from "./SocialCard";

class App extends Component {

    state = {
        contents: [
            { id: 1, user: 'Radek', email: 'test@wp.pl', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus ex mattis libero malesuada bibendum efficitur a enim. Nunc rutrum tellus et nunc consequat, posuere faucibus ante dictum.'  },
            { id: 2, user: 'Marysia', email: 'nowy@onet.pl', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus ex mattis libero malesuada.'  },
            { id: 3, user: 'Stasiek', email: 'bull@gmail.com', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus ex mattis libero malesuada bibendum efficitur a enim. Nunc rutrum tellus et nunc consequat.'  },
            { id: 4, user: 'Kasia', email: 'lady@bunga.it', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus ex mattis libero malesuada bibendum efficitur a enim. Nunc rutrum tellus et nunc consequat, posuere faucibus ante dictum.'  },
        ]
    };

  render() {
    return (
     <React.Fragment>
         <div id="theme">
             <img src="/images/title.png" alt="Social App icon" className="img-title" />
              Social Card Application
         </div>
             {this.state.contents.map((content,idx) =>
                 <SocialCard
                     name={ content.name }
                     message={ content.info }
                     email={ content.email }
                     graph={ content.id }
                     key={ idx }
                 />
             )}
     </React.Fragment>
    );
  }
}

export default App;
