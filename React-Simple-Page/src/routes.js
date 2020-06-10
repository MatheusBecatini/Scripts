import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import {Main, Input} from './components/Main'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Input}/>        
            <Route exact path="/repos/" component={Input}/>        
            <Route path="/repos/:id" component={Main}/>        
        </Switch>
    </BrowserRouter>
)

export default Routes;