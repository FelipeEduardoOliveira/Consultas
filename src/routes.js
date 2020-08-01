import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Register from './pages/Register';
import Preview from './pages/Preview';
import Edition from './pages/Edition';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Register} />
                <Route exact path='/consultas' component={Preview} />
                <Route exact path='/edicao' component={Edition} />

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;