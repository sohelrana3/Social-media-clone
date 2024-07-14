import React from "react";
import {Moon} from "../../../../svg/Moon"
import {Logout} from "../../../../svg/Logout"

const SettingsOption = () => {
  return (
    <ul>
      <li className="flex items-center gap-x-2">
        <div>
          <Moon />
        </div>
        <div>
          <p className="text-xl text-black">Display</p>
        </div>
      </li>
      <li className="flex items-center gap-x-2">
        <div>
          <Logout />
        </div>
        <div>
          <p className="text-xl text-black">LogOuts</p>
        </div>
      </li>
    </ul>
  );
};

export default SettingsOption;
