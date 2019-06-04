import React from 'react';

class MakeCard extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  // }
  state = { front: ''}
  
  handleChange = (e) => {
    this.setState({ front: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.front)
  }

  render() {

    const { front } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
      <input
      value={front}
      name="front"
      onChange={this.handleChange}
      required placeholder="make card front"
       />
      </form>
    )
  }
}

export default MakeCard;
