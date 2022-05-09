import React from 'react';
import { Card, CardModel } from '../Card/Card';
import './Grid.scss';

export interface GridProps extends GridModel {
  gridType: string;
  title?: string;
}
export interface GridModel {
  cards: CardModel[];
}

const renderSwitch = (gridType:string, cards:CardModel[]) => {
  switch(gridType) {
    case "mosaic":
      return renderMosaicCards(cards);
    default:
      return renderGridCards(cards);
  }
};

const renderMosaicCards = (cards:CardModel[]) => {
  const partials = cards.slice(0, 8);
  return (
    <>
      <Card {...partials[0]} size='is-6' />
      <Card {...partials[1]} size='is-3' isTitleOnly={true} />
      <Card {...partials[2]} size='is-3' isTitleOnly={true} />
      <Card {...partials[3]} size='is-3' isTextOnly={true} isTitleOnly={true} />
      <Card {...partials[4]} size='is-3' isTextOnly={true} isTitleOnly={true} />
      <Card {...partials[5]} size='is-4' />
      <Card {...partials[6]} size='is-4' />
      <Card {...partials[7]} size='is-4' />
    </>
  )
};

const renderGridCards = (cards:CardModel[]) => {
  return cards.map((cardProps) => {
    return <Card {...cardProps} size='is-4' key={cardProps.cardId} />
  })
};

export const Grid = (props:GridProps) => {
  return (
    (props.cards.length === 0) ? null :
    <>
      {props.title && <h2 className="grid-title">{props.title}</h2>}

      <div className="grid">
        {renderSwitch(props.gridType, props.cards)}
      </div>
    </>
  );
};
