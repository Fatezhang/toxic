import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';

import { HomePage } from './HomePage';
import { Navigate } from '../components/Navigate';
import { SideBar } from '../components/SideBar';

const Main = () =>
  <div className="h-screen flex flex-row">
    <SideBar/>
    <div className="flex flex-col w-full">
      <Navigate/>
      <div className="w-full h-full overflow-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  </div>;

export { Main };
