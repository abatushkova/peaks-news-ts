import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import { Grid } from '../Grid/Grid';
import './Home.scss';

interface SectionModel {
  id: string;
  title: string;
}

const sections: SectionModel[] = [
  {
    id: 'sport',
    title: 'Sport',
  },
  {
    id: 'culture',
    title: 'Culture',
  },
  {
    id: 'lifeandstyle',
    title: 'Life and style',
  },
];

const Home = () => {

  return (
    <main className="container">
      <PageHeader />
      <Grid gridMode="mosaic" title="" cards={[]} id="news" />

      {sections.map((section, index) => {
        return (
          <Grid
            key={section.id + index}
            title={section.title}
            gridMode=""
            id={section.id}
            cards={[]}
          />
        );
      })}
    </main>
  );
};

export default Home;
