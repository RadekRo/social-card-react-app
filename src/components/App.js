import React, { Component } from 'react';

import '../css/styles.css';

import TitleBar from "./TitleBar";
import TextContainer from "./TextContainer";
import Picture from "./Picture";

class App extends Component {
  render() {
    return (
     <React.Fragment>
         <TitleBar/><br/>
         <TextContainer/><br/>
         <Picture/>
     </React.Fragment>
    );
  }
}

export default App;
