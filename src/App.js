import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import AgencyCoApp from "./production/reducers";
import Routes from "./production/routers"

// create store
const store = createStore(
  AgencyCoApp,
  composeWithDevTools()
  // applyMiddleware(...middleware),
  // other store enhancers if any
);

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
