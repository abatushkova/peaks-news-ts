import { useState } from 'react';
import { createContainer } from 'react-tracked';

interface GlobalStateModel {
  orderBy: string;
  searchQuery?: string;
};

const initialGlobalState = {
  orderBy: 'newest',
  searchQuery: '',
};

const useValue = () => useState<GlobalStateModel>({...initialGlobalState});

export const {
  Provider,
  useTrackedState,
  useUpdate: useSetState,
} = createContainer(useValue);
