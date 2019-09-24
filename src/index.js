import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound from './pages/notFound/NotFound'
import Home from './pages/home/Home'
import Author from './pages/author/Author'
import AuthorForm from './pages/author/AuthorForm'
import AuthorDetail from './pages/author/AuthorDetail'
import Book from './pages/book/Book'
import Login from './pages/login/Login'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './store/index';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact={true} component={Login} />
                <Route path="/" exact={true} component={Home} />
                <Route path="/authors" exact={true} component={Author} />
                <Route path="/authors/:id" component={AuthorDetail} />
                <Route path="/author/form/:id?"  component={AuthorForm} />
                <Route path="/books" component={Book} />
                <Route path="" component={NotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
