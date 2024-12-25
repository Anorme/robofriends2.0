import { createRoot } from "react-dom/client";
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import './index.css'; 
import App from './containers/App.jsx';
import 'tachyons';
import { searchRobots } from "./reducers.js";

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


