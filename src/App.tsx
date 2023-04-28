import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';

import { Navigate } from './components/Navigate';
import { SideBar } from './components/SideBar';
import { HomePage } from './pages/HomePage';
import { ImageColour } from './pages/ImageColour';

const App = () =>
  <div className="h-screen flex flex-row">
    <BrowserRouter>
      <SideBar/>
      <div className="flex flex-col w-full">
        <Navigate/>
        <div className="w-full h-full overflow-auto">

          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/imageBackCover" element={<ImageColour/>}/>
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  </div>;

export default App;
