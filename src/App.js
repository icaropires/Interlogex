import React from 'react';
import { Route, Switch} from 'react-router';
import {BrowserRouter, Link, NavLink} from 'react-router-dom';
import {Icon, Grid, Cell, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import logo from "../public/imagem/logo.png";

export default class App extends React.Component {
  render(){
    return (
    <BrowserRouter>
      <Grid>
        <Cell col={12}><img src={logo} width="100px" height="100px" /></Cell>
        <Cell col={12}>
          <Interlogex />
        </Cell>
        <Cell col={12}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Cell>
      </Grid>
      <Footer size="mini">
        <FooterSection type="left" logo="Title">
          <FooterLinkList>
            <Link to="/">Home</Link>
          </FooterLinkList>
        </FooterSection>
        <FooterSection type="right" logo="Contato">
          <Grid>
            <Cell col={4}>Telefone</Cell>
            <Cell col={6}>(61) 3554-5467</Cell>
          </Grid> 
          <Grid>
            <Cell col={4}>E-mail</Cell>
            <Cell col={6}>contato@interlogex.com.br</Cell>
          </Grid> 
          <Grid>
            <Cell col={4}>Nossa loja</Cell>
            <Cell col={6}>Vicent Pires - DF, Rua 10, Chácara 175</Cell>
          </Grid>
        </FooterSection>
      </Footer>
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
