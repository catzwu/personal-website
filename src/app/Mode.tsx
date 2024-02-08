"use client";

import ModeContext from "@/utils/context";
import { Switch } from "@headlessui/react";
import { ReactNode, useState } from "react";

const Mode = ({ children }: { children: ReactNode }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <ModeContext.Provider value={enabled ? "brain" : "world"}>
      {children}
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span>Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </ModeContext.Provider>
  );
};

export default Mode;
