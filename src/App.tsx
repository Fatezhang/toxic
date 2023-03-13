import { useReducer } from 'react';

import { emptyState, MainContext } from './context/MainContext';
import { reducer } from './context/reducer';
import { Main } from './pages/Main';

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, emptyState.state);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      <Main/>
    </MainContext.Provider>
  );
};

export default App;
