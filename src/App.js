import React, { Component } from 'react';
import { Container, } from "semantic-ui-react";
import './App.css';
import Card from './Card'
import MakeCard from './MakeCard';

class App extends Component {

  state = {
    faces: [
      { id: 1, front: "this front", back: "this back", },
      { id: 2, front: "this 2 front", back: "this 2 back", },
    ]
  }

  // toggleSide = () => this.setState({})

  render() {
    const { faces } = this.state;
    return (
      <Container style={{ padding: "15px", }}>
      <div>
        <Card name="flash cards" cards={faces} />
        <MakeCard />
      </div>
    </Container>
    );
  }
}


export default App;
