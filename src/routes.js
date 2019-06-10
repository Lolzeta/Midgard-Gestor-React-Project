import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import App from './components/App';
import SignIn from './components/SignIn';

const AppRoutes = () => 

<App>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/SignIn" component={SignIn}/>
    </Switch>
</App>

export default AppRoutes;