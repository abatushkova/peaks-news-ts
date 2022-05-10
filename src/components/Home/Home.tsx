import React, { useEffect } from 'react';
import { PageHeader } from '../PageHeader/PageHeader';
import { Grid } from '../Grid/Grid';
import { useTrackedState, useUpdate } from '../../store/globalStore';
import { Spinner } from '../Spinner/Spinner';
import { getArticle } from '../../services/dataProvider';
import { mapData } from '../../utils/mapData';
import './Home.scss';

interface SectionModel {
  id: string;
  title: string;
}

const sections: SectionModel[] = [
  {
    id: 'news',
    title: 'Top stories',
  },
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

export const Home = () => {
  const topNews = sections[0];
  const otherNews = sections.slice(1);

  const setGlobalState = useUpdate();
  const { isLoading, orderBy, dataDictionary } = useTrackedState();

  useEffect(() => {
    Promise.all(sections.map(section => {
      return getArticle(section.id, orderBy)
      .then((data) => {
        setGlobalState(prev => {
          const d = new Map(prev.dataDictionary);
          d.set(section.id, data);
          return ({...prev, dataDictionary: d});
        });
      })
    })).then(() => {
      setGlobalState(prev => ({...prev, isLoading: false}));
    });
  },[setGlobalState, orderBy]);

  return (
    <main className="main layout">
      <PageHeader title={topNews.title} />
      {isLoading
        ? <Spinner />
        : <>
            <Grid gridType="mosaic" cards={mapData(dataDictionary.get(topNews.id))} />

            {otherNews.map((section, index) => {
              const cards = mapData(dataDictionary.get(section.id));
              return (
                <Grid
                  gridType="grid"
                  key={section.id + index}
                  title={section.title}
                  cards={cards}
                />
              )
            })}
          </>
      }
    </main>
  );
};
