import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from '../pages/List';
import Home from '../pages/Home';
import Criterios from '../pages/Criterios';
const Authenticate: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path='/assessments' exact component={List} />
                    <Route path='/criterios/:id' exact component={Criterios} />
                    <Route component={Home} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Authenticate;