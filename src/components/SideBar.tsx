import { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import { Link } from 'react-router-dom';

import { MAX_SIDEBAR_WIDTH } from '../constants/common';

const menus = [
  {
    title: 'Home',
    link: '/',
    key: 'home',
  },
  {
    title: 'Image Back Cover',
    link: '/imageBackCover',
    key: 'image-back-cover'
  }
];

const SideBar = () => {
  const [ selectMenu, setSelectedMenu ] = useState('home');

  return <div className="relative w-15 max-w-20 border-r-2 border-solid border-base-200">
    <div className="navbar text-info-500">
      <Link className="normal-case text-xl" to="/">Toxic</Link>
    </div>
    <ResizableBox
      axis="x" width={256}
      maxConstraints={[ MAX_SIDEBAR_WIDTH, 1024 ]}
      minConstraints={[ 256, 1024 ]}
      handle={
        <div
          className="rounded w-2 h-4 bg-base-300 -right-[5px] top-[50%] hover:cursor-col-resize absolute"/>
      }>
      <ul className="menu bg-base-100">
        {menus.map(({ key, title, link }) =>
          <li key={key} className={`hover-bordered ${key === selectMenu ? 'active bordered' : ''}`}>
            <Link to={link} onClick={() => setSelectedMenu(key)}>{title}</Link>
          </li>)}
      </ul>
    </ResizableBox>
  </div>;
};

export { SideBar };
