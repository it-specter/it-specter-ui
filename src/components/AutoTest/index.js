import React, { useState } from 'react';
import { Card } from 'ITSpecterUI';

const AutoTest = ({ form }) => {
  const [cards] = useState(
      form.cards.map(card => ({
        ...card,
        id: card.id,
        color: card.color,
        height: card.height
      }))
    )
    console.log(cards)
return (
  <div>
    {cards.map(card => (
      <Card key={card.id} color={card.color} height={card.height} />
    ))}
  </div>
);
};

export default AutoTest;

