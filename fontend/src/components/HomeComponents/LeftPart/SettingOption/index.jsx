import React from "react";

const SettingsOption = () => {
  return (
    <ul>
      <li className="flex items-center gap-x-2">
        <div>Icon</div>
        <div>
          <p className="text-xl text-black">Display</p>
        </div>
      </li>
      <li className="flex items-center gap-x-2">
        <div>Icon</div>
        <div>
          <p className="text-xl text-black">LogOuts</p>
        </div>
      </li>
    </ul>
  );
};

export default SettingsOption;
