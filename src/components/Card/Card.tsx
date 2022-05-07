import React from "react";
import './Card.scss';
import logo from '../../assets/images/Logo_White.png';
export interface CardModel {
  title: string;
  headline?: string;
  body: string;
  thumbnail?: string;
  size: string;
  section: string;
  isNoImage: boolean;
}

export const Card = (props: CardModel) => {
  const getSize = (size: string) => {
    return `card ${size}`;
  };

  return (
    <div className={getSize(props.size)}>
      {props.isNoImage
        ? ''
        : <img
            src={props.thumbnail || logo}
            alt=""
            className="card__img"
          />
      }
      <div className="card__text">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__subtitle">{props.headline}</p>
      </div>
    </div>
  );
};
