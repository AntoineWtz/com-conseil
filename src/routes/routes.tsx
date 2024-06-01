import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import News from '../pages/News';
import Tools from '../pages/Tools';
import Contact from '../pages/Contact';
import Login from '../pages/Login';

const Routes: React.FC = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/news" component={News} />
            <Route path="/tools" component={Tools} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
        </Switch>
    </Router>
);

export default Routes;
