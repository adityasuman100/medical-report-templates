import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";

import { MantineProvider } from "@mantine/core";
import ReactPdf from "./components/ReactPdf.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      {/* <App /> */}
      <ReactPdf />
    </MantineProvider>
  </React.StrictMode>
);
