import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
// ---- IMPORT PAGES ----
import Login from './views/login/login';
import Home from './views/home/home';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => true ? (
        <Component {...props}/>
    ) : (
        <Redirect to={{ pathname: "/login"}}/>
    )}/>
)


const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <PrivateRoute exact path="/" component={()=> <Home/> }/>
            <Route exact path="/login" component={() => <Login/>}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;