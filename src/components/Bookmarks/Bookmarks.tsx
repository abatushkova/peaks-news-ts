import React from 'react';
import { PageHeader } from '../PageHeader/PageHeader';
import { Grid } from '../Grid/Grid';
import './Bookmarks.scss';

export const Bookmarks = () => {
  return (
    <main className="main layout">
      <PageHeader title="All bookmark" />
      <Grid gridType="grid" cards={[]} />
    </main>
  );
};
