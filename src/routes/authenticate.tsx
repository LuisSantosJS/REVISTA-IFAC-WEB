import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from '../pages/List';
import Home from '../pages/Home';
import Criterios from '../pages/Criterios';
import Question from '../pages/Question';
const Authenticate: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path='/assessments' exact component={List} />
                    <Route path='/responder/formulario/:name/:id' exact component={Question} />
                    <Route path='/criterios/:a/:b/:c/:d/:desc' exact component={Criterios} />
                    <Route component={Home} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Authenticate;