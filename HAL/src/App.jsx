import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarWeb from './components/navbar';
import HAL from './pages/HAL';
import arXiv from './pages/arXiv';
import Home from './pages/home';

const App = () => {
  return (
    <Router>
      <NavbarWeb />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hal" component={HAL} />
        <Route exact path="/arxiv" component={arXiv} />
      </Switch>
    </Router>
  );
};
export default App;
