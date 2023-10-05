import React from "react";

const HeroesItem = ({ hero }) => {

    const {image} = hero

  return (
    <div>
      <h3>{hero.name}</h3>
      <img src={image.avatar} alt={hero.name} />
    </div>
  );
};

export default HeroesItem;