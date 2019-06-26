import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/login';
import Dashboard from './components/dashboard';

const Routes = () => {
    return (
        <div>
           
            <Switch>
                
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/" exact component={Login} />
            </Switch>
        </div>
    )
};

export default Routes;