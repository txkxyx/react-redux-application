import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";

// storeの作成
// 全てのstateがstoreに集約
const store = createStore(reducer);

ReactDOM.render(
  // 全てのコンポーネントからストアを閲覧できるようにする
  // コンポーネントからコンポーネントへ値を渡す必要がなくなる
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
