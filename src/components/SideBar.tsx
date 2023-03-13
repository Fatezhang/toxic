import { ResizableBox } from 'react-resizable';

import { MAX_SIDEBAR_WIDTH } from '../constants/common';

const SideBar = () =>
  <div className="relative w-15 max-w-20 border-r-2 border-solid border-base-200">
    <div className="navbar text-info-500">
      <a className="normal-case text-xl">Toxic</a>
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
        <li className="bordered"><a href="/#">First item</a></li>
      </ul>
    </ResizableBox>
  </div>;

export { SideBar };
