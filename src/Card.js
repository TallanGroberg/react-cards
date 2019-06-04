import React from 'react';

const Card = (props) => (

  <div>
      <h3>{props.name}</h3>
      <ul>
      { props.cards.map( card => <li key={card.id}>{card.front}</li> ) }
      </ul>
  </div>

);

export default Card;
