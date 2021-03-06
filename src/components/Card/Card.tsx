import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo_White.png';
import './Card.scss';
export interface CardModel {
  title: string;
  headline?: string;
  body: string;
  thumbnail?: string;
  size: string;
  cardId: string;
  isTextOnly: boolean;
  isTitleOnly: boolean;
  category: string;
  date: string;
}

const getClassName = (props: CardModel) => {
  if (props.isTextOnly && props.isTitleOnly) {
    return `card card--${props.category} ${props.size} card--default`
  }
  return `card card--${props.category} ${props.size}`;
};

const renderImage = (props: CardModel) => {
  if (!props.isTextOnly) {
    return (
      <div className="card__img-wrapper">
        <img src={props.thumbnail || logo} alt="" className={`card__img-item ${!props.thumbnail && 'card__img-item--default'}`} />
      </div>
    )
  }
  return '';
};

const renderSubtitle = (props: CardModel) => {
  if (!props.isTitleOnly) {
    return <p className="card__subtitle">{props.body}</p>
  }
  return '';
};

export const Card = (props: CardModel) => {
  return (
    <div className={getClassName(props)}>
      {renderImage(props)}
      <div className="card__text">
        <h2 className="card__title">
          <Link to="/article" className="card__link">
            {props.title}
          </Link>
        </h2>
        {renderSubtitle(props)}
      </div>
    </div>
  );
};
