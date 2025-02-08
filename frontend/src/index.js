import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use createRoot for React 18
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

// ✅ Correct way to render in React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


