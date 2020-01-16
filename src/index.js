import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers/index";
import Signin from './components/Signin/Signin';
import thunk from 'redux-thunk';
import Feature from './components/Feature/feature';
import Signout from './components/Signout/Signout';

const store = createStore(rootReducer, {
    auth: { authenticated: localStorage.getItem("token") }
}, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/feature" exact component={Feature} />
                <Route path="/signout" exact component={Signout} />
            </App>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

