import { AnyAction, UPDATE_CURRENT_PAGE } from './ActionTypes';
import { CurrentPage, MainContextState } from './MainContext';

const reducer = (state: MainContextState, action: AnyAction): MainContextState => {
  switch (action.type) {
    case UPDATE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload as CurrentPage
      };
    default:
      return state;
  }
};

export { reducer };
