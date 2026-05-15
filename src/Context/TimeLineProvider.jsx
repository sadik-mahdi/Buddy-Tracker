import React, { useState } from "react";
import { CallsContexts } from "./TimeLineContext";

const TimeLineProvider = ({ children }) => {
  const [calls, setCalls] = useState([]);
  const data = {
    calls,
    setCalls,
  };
  return (
    <CallsContexts.Provider value={data}>{children}</CallsContexts.Provider>
  );
};

export default TimeLineProvider;
