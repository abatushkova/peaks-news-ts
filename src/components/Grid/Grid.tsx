import React from "react";
import { Card, CardModel } from '../Card/Card';
import './Grid.scss';

export interface GridModel {
  cards: CardModel[];
  gridMode: string;
}

const renderSwitch = (props:GridModel) => {
  switch(props.gridMode) {
    case 'mosaic':
      return renderMosaicCards(props.cards);
    default:
      return renderGridCards(props.cards);
  }
};

const renderGridCards = (cards:CardModel[]) => {
  return cards.map((cardProps) => {
    return <Card {...cardProps} size="is-4" />
  })
};

const renderMosaicCards = (cards:CardModel[]) => {
  const partials = cards.slice(0, 8);

  return (
    <>
      <Card {...partials[0]} size="is-6" />
      <Card {...partials[1]} size="is-3" />
      <Card {...partials[2]} size="is-3" />
      <Card {...partials[3]} size="is-3" isNoImage={true} />
      <Card {...partials[4]} size="is-3" isNoImage={true} />
      <Card {...partials[5]} size="is-4" />
      <Card {...partials[6]} size="is-4" />
      <Card {...partials[7]} size="is-4" />
    </>
  )
}

export const Grid = (props:GridModel) => {
  return (
    <div className="grid">
      {renderSwitch(props)}
    </div>
  )
};
