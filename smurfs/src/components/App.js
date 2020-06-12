import React, { Component } from "react";
import "./App.css";

import AddSmurf from './AddSmurf';
import { SmurfProvider } from './SmurfContext';
import SmurfList from './SmurfList';


class App extends Component {
  render() {
    return (
      <SmurfProvider>
      <div className="App">
       
       <AddSmurf />
       <SmurfList />
      </div>
      </SmurfProvider>
    );
  }
}

export default App;
