import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import setupSocket from './socket/socket'
import reducers from './reducers/reducer'
import handleNewMessage from './sagas/sagas'

const username = 'boba'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
    )

const socket = setupSocket(store.dispatch, username)
sagaMiddleware.run(handleNewMessage, {socket, username})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));


serviceWorker.unregister();
