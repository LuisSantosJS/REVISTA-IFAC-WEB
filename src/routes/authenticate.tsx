import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
const Authenticate: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Authenticate;