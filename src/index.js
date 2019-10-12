import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import 'rxjs';
import { createStore , applyMiddleware , compose} from 'redux';
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable';
import rootReducers from './components/redux/rootReducer.js';
import rootEpics from './components/redux/rootEpics.js';





const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();
const apply = composeEnhancers(applyMiddleware(epicMiddleware));

const store = createStore(rootReducers,apply)

epicMiddleware.run(rootEpics);


const app = <Provider store={store}><BrowserRouter ><App/></BrowserRouter></Provider>


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
