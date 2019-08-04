import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import './index.css';
import App from './Containers/App/App';
import * as serviceWorker from './serviceWorker';
import usersListReducer from './store/reducers/usersList';
import userCardReducer from './store/reducers/userCard';
import reposListReducer from './store/reducers/reposList';
import repoReducer from './store/reducers/repo';
import * as actionCreators from './store/actions/index';

const composeEnhancers = composeWithDevTools({ actionCreators, trace: true, traceLimit: 25 });

const rootReducer = combineReducers({
  usersList: usersListReducer,
  userCard: userCardReducer,
  reposList: reposListReducer,
  repo: repoReducer,
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
