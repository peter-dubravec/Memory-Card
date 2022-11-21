import React from "react";

const Card = ({ cardClicked, id, i }) => {
  return (
    <div onClick={() => cardClicked(id)} className="card">
      {i}
    </div>
  );
};

export default Card;
