import React from "react";
import './Card.scss';

export interface CardModel {
  title: String,
  size: String,
};

export function Card(props: CardModel) {
  const getSize = (size: String) => {
    return `card ${size}`;
  };

  return (
    <div className={getSize(props.size)}>
      <img src="" alt="" className="card__img" />
      <div className="card__text">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__subtitle"></p>
      </div>
    </div>
  );
};
