import { CurrentPage } from './MainContext';

export interface Action<T> {
  type: string
  payload?: T
}

export interface UpdateCurrentPageAction extends Action<CurrentPage> {
}

export type AnyAction = UpdateCurrentPageAction


export const UPDATE_CURRENT_PAGE = 'update_current_page';

export const UpdateCurrentPageAction = (currentPage: CurrentPage): UpdateCurrentPageAction => ({
  type: UPDATE_CURRENT_PAGE,
  payload: currentPage
});
