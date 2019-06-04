import React, { Component } from 'react';
import { Container, } from "semantic-ui-react";
import './App.css';

class App extends Component {

  state = {
    faces: [
      { id: 1, front: "this front", back: "this back", },
      { id: 2, front: "this 2 front", back: "this 2 back", },
    ]
  };

  renderFaces = () => {
    const { faces, } = this.state;
    return faces.map( face => <li key={face.id}>{face.front}</li>
  )
};

  render() {
    return (
      <div>
        <h1>flash cards</h1>
        <ul>
          { this.renderFaces() }
        </ul>
      </div>
    );
  }
}


export default App;
