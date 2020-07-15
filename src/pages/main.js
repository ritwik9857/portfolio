import React from 'react';
import landingpage from './landingpage';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import about from './about';
import resume from './resume';
import Projects from './projects';
import ContactMe from './contactme';
const main = () =>(
    <BrowserRouter>
    <Switch>
        <Route exact path='/MyPortfolio' component={landingpage} />
        <Route exact path='/about' component={about} />
        <Route exact path='/resume' component={resume} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contactme' component={ContactMe} />
    </Switch>
    </BrowserRouter>
)
export default main;