import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Question from '../pages/Question';
const Auth: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path='/responder/formulario/:name/:id' exact component={Question} />
                    <Route component={Login} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Auth;