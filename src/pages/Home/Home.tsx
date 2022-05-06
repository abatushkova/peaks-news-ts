import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Grid, GridModel } from '../../components/Grid/Grid';
import './Home.scss';
import { CardModel } from '../../components/Card/Card';

const getData = () => {
  return {
    cards: [
      {
        title: 'Hello',
        size: '1'
      },
      {
        title: 'Aloha',
        size: '2'
      },
    ] as CardModel[]
  } as GridModel;
}

const Home = () => {
  return (
    <main className="container">
      <PageHeader />
      <Grid {...getData()} />
    </main>
  );
};

export default Home;
