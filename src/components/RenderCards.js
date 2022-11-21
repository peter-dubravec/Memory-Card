import React from "react";

const RenderCards = (props) => {
  return (
    <>
      {props.cards.map((card, i) => {
        let Card = card.component;
        return (
          <Card
            key={i}
            cardClicked={props.cardClicked}
            id={card.id}
            img={card.img}
          />
        );
      })}
    </>
  );
};

export default RenderCards;
