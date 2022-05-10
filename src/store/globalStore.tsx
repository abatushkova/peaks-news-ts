import { useState } from 'react';
import { createContainer } from 'react-tracked';
import { ArticleEntity } from '../services/dataProvider';

interface GlobalStateModel {
  orderBy: string;
  searchQuery?: string;
  isLoading: boolean;
  sectionId: string;
  dataDictionary: Map<string, ArticleEntity[]>;
}

const initialGlobalState = {
  orderBy: 'newest',
  searchQuery: '',
  isLoading: true,
  sectionId: '',
  dataDictionary: new Map(),
};

export const useValue = () => useState<GlobalStateModel>(initialGlobalState);

export const {
  Provider,
  useTrackedState,
  useUpdate,
} = createContainer(useValue);
