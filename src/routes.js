import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Register from './pages/Register';
import Preview from './pages/Preview';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Register} />
                <Route exact path='/consultas' component={Preview} />

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;