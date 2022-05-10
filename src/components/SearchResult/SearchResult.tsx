import React, { useEffect } from 'react';
import { PageHeader } from '../PageHeader/PageHeader';
import { Grid } from '../Grid/Grid';
import { useTrackedState, useUpdate } from '../../store/globalStore';
import { Spinner } from '../Spinner/Spinner';
import { getArticle } from '../../services/dataProvider';
import { mapData } from '../../utils/mapData';
import './SearchResult.scss';

interface SectionModel {
  id: string;
  title: string;
}

const section: SectionModel = {
    id: 'news|sport|culture|lifeandstyle',
    title: '',
};

export const SearchResult = () => {
  const setGlobalState = useUpdate();
  const {
    isLoading,
    orderBy,
    dataDictionary,
    searchQuery
  } = useTrackedState();

  useEffect(() => {
    getArticle(section.id, orderBy, searchQuery)
    .then((data) => {
      setGlobalState(prev => {
        const d = new Map(prev.dataDictionary);
        d.set(section.id, data);
        return ({...prev, dataDictionary: d, isLoading: false});
      });
    });
  },[orderBy, setGlobalState, searchQuery]);

  return (
    <main className="main layout">
      <PageHeader title="Search results" />
      {isLoading
        ? <Spinner />
        : <>
            <Grid gridType="grid" cards={mapData(dataDictionary.get(section.id))} />
          </>
      }
    </main>
  );
};
