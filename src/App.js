import React, { Component } from 'react';
import { Container, } from "semantic-ui-react";
import './App.css';
import Card from './Card'

class App extends Component {

  state = {
    faces: [
      { id: 1, front: "this front", back: "this back", },
      { id: 2, front: "this 2 front", back: "this 2 back", },
    ]
  }

  render() {
    const { faces } = this.state;
    return (
      <div>
        <Card name="flash cards" cards={faces} />
      </div>
    );
  }
}


export default App;
