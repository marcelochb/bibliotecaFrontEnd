import React from 'react';
//import UserNavBar from './screens/User/NavBar';
import AdmUserNavBar from './screens/AdmUser/NavBar';
//import Login from './components/ui/Login';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ScreenUserNotas from './screens/User/Notas';
import ScreenAdmUserNotas from './screens/AdmUser/Notas';
import ScreenAdmUserLivros from './screens/AdmUser/Livros';
import ScreenAdmUserHome from './screens/AdmUser/Home';
import Login from './components/ui/Login';
import { isAuthenticated } from './auth';
import Register from './components/ui/Register';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
            )
    )}
    />
);

const Routes = () => (
    <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />

        <div className="container">
            <PrivateRoute exact path="/" component={AdmUserNavBar} />
            <Switch>
                <PrivateRoute path="/livros" component={ScreenAdmUserLivros} />
                <PrivateRoute path="/notas" component={ScreenAdmUserNotas} />
                <PrivateRoute path="/admuser" component={ScreenAdmUserHome} />

            </Switch>
        </div>
    </BrowserRouter>
);

export default Routes;