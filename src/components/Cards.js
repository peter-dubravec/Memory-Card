import React from "react";

const Card = ({ cardClicked, id, img }) => {
  console.log(img);
  return (
    <div onClick={() => cardClicked(id)} className="card">
      <img alt="Pokemon" src={img}></img>
    </div>
  );
};

export default Card;
