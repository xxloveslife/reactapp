import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reducers from './reducers'
import Login from './container/login/login'
import Register from './container/register/register'
import Authroute from './components/auth/authroute'
import Dashboard from './container/dashboard/dashboard'
// console.log('reducers', reducers);



const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : () => { }

))

// console.log('state', store.getState);



ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Authroute></Authroute>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>

                    <Route component={Dashboard}></Route>
                </Switch>
            </div>
        </BrowserRouter>

    </Provider>, document.getElementById('root')
)
