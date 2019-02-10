import React from "react";

import { ThemeProvider } from "./src/contexts/ThemeContext";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

require("./src/css/code.css");
// require("prismjs/themes/prism.css");

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}