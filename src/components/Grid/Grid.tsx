import React, { useState, useEffect } from 'react';
import { useTrackedState } from '../../store';
import { Card, CardModel } from '../Card/Card';
import { getArticle, ArticleEntity } from "../../services/dataProvider";
import './Grid.scss';

export interface GridModel {
  cards: CardModel[];
  gridMode?: string;
  id: string;
  title: string;
}

const renderSwitch = (props:GridModel) => {
  switch(props.gridMode) {
    case "mosaic":
      return renderMosaicCards(props.cards);
    default:
      return renderGridCards(props.cards);
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
}

const renderGridCards = (cards:CardModel[]) => {
  return cards.map((cardProps) => {
    return <Card {...cardProps} size='is-4' key={cardProps.id} />
  })
};

const matchData = (articles:ArticleEntity[]) => {
  const cards = articles.map(article => ({
    title: article.webTitle,
    headline: article.fields.headline,
    body: article.fields.body,
    thumbnail: article.fields.thumbnail,
    id: article.id,
    size: '',
    isTextOnly: false,
    isTitleOnly: false,
  })) as CardModel[];

  return { cards } as GridModel;
};

export const Grid = (props:GridModel) => {
  const orderBy:string = useTrackedState().orderBy;
  const [grid, setGrid] = useState<GridModel>({
    cards: props.cards,
    gridMode: props.gridMode,
    id: props.id,
    title: props.title,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticle(props.id, orderBy);

      setGrid(prevState => {
        return {...prevState, ...matchData(data)};
      })
    };

    fetchData()
      .catch(console.error);
  },[props.id, orderBy]);

  return (
    <>
      {props.title && <h2 className="grid-title">{props.title}</h2>}

      <div className="grid">
        {renderSwitch(grid)}
      </div>
    </>
  )
};
