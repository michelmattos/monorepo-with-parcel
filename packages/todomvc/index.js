import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "ui/components/App";
import reducer from "store/reducers";
import "todomvc-app-css/index.css";

const store = createStore(reducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
