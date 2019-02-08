import React from "react";

import { ThemeProvider } from "./src/contexts/ThemeContext";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

require("./src/css/code.css");
// require("prismjs/themes/prism.css");
