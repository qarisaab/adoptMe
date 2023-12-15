import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>adopt me</h1>
      <SearchParams />
    </div>
  );
};

createRoot(document.getElementById("root")).render(React.createElement(App));
