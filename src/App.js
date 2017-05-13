import React from 'react';
import { Route, Switch} from 'react-router';
import {BrowserRouter, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

export default class App extends React.Component {
  render(){
    return (<BrowserRouter>
      <div>
          <Interlogex />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>

      </div>
      </BrowserRouter>
    );
  }
}
const Interlogex = () => (
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/quemsomos">Sobre nós</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/contato">Contatos</Link>
          </div>
);
