import React from "react";
import { Card, CardModel } from '../Card/Card';
import './Grid.scss';

export interface GridModel {
  cards: [CardModel],
}

export function Grid(props: GridModel) {
  return (
    <div className="grid">
      {props.cards.map((cardProps, index) => (
        <Card {...cardProps} />
      ))}
    </div>
  );
};
