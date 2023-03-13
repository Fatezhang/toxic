import { useEffect } from 'react';
import { themeChange } from 'theme-change';

const Navigate = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div className="flex flex-row justify-between my-1 px-5 shadow">
      <div className="text-sm breadcrumbs">
        <ul>
          <li><a href="/">I{'\''}m your favorite toolkit 🧰</a></li>
        </ul>
      </div>
      <div className="flex flex-row gap-2">
        <button className="btn btn-sm btn-square">
          ⚙️
        </button>
        <button className="btn btn-sm btn-square btn-outline">
          🙂
        </button>
        <select className="select select-bordered select-sm max-w-xs" data-choose-theme
                data-key="admin-panel">
          <option disabled selected>Change theme</option>
          <option value="light">Light</option>
          <option value="synthwave">Synthwave</option>
          <option value="dark">Dark</option>
          <option value="valentine">Valentine</option>
          <option value="forest">Forest</option>
          <option value="garden">Garden</option>
        </select>
      </div>
    </div>
  );
};

export { Navigate };
