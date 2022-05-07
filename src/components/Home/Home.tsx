import React, { useState, useEffect } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import { Grid, GridModel } from '../Grid/Grid';
import { CardModel } from '../Card/Card';
import { getData, ArticleEntity } from '../../services/dataProvider';
import './Home.scss';

const matchData = (data:ArticleEntity[]) => {
  const cards:CardModel[] = data.map(item => ({
    title: item.webTitle,
    headline: item.fields.headline,
    body: item.fields.body,
    thumbnail: item.fields.thumbnail,
    section: item.sectionName,
    size: '',
    isNoImage: false,
  }));

  return { cards } as GridModel;
};

const Home = () => {
  const [grid, setGrid] = useState<GridModel>({ cards: [], gridMode: '' });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      console.log(data);

      setGrid(matchData(data));
    };

    fetchData()
      .catch(console.error);
  },[]);

  return (
    <main className="container">
      <PageHeader />
      <Grid {...grid} gridMode="mosaic" />
      <Grid {...grid} />
    </main>
  );
};

export default Home;
