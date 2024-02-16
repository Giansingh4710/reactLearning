import React from "react";
import ReactDOM from "react-dom";

import Searcher from "./searcher";

const a = () => {
  const lst = ["bob jones", "hello", "otjer", "food"];
  return (
    <div>
      <Searcher list={lst} />
    </div>
  );
};

export default a;
