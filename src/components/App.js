import React, { Component } from 'react';

import '../css/styles.css';

import TitleBar from "./TitleBar";
import TextContainer from "./TextContainer";
import Picture from "./Picture";

class App extends Component {
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
