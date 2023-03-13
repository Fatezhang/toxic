import { createContext, Dispatch } from 'react';

import { AnyAction } from './ActionTypes';

export type ContextContainer = {
  dispatch: Dispatch<AnyAction>
}

export type CurrentPage = {
  name: string;
  link: string;
}
export const emptyState: MainContextContainer = {
  state: {
    currentPage: {
      name: '/',
      link: '/'
    }
  },
  dispatch: () => {
    return;
  },
};

export type MainContextState = {
  currentPage: CurrentPage
}

export type MainContextContainer = ContextContainer & {
  state: MainContextState
}
export const MainContext = createContext<MainContextContainer>(emptyState);
