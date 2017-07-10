import React from 'react';
import { Route, Switch} from 'react-router';
import {BrowserRouter, Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
   Icon, Layout, Header, HeaderRow,
   Drawer, Content, Grid, Cell,
   Card, CardTitle, CartText, CardActions
   } from 'react-mdl';
import AppBar from 'material-ui/AppBar';

import Home from './Home';
import About from './About';
import ContactPage from './ContactPage';
import ClientAreaPage from './ClientAreaPage';
import NotFound from './NotFound';
import highway from "../public/imagem/high_way.jpg";
import logo from "../public/imagem/logo_cabecalho.png";
import telefone from "../public/imagem/telefone.png";
import MaterialLayout from 'react-mdl';
import MenuInterlogex from './Menu';
import FooterInterlogex from './Footer';
import Services from './Services';

import './style.css';
import 'mdi/css/materialdesignicons.min.css';
const PreHeader = (
  <div className="pre_header">
    <img src={highway} />
    <div>
      <h1>O jeito certo de fazer entregas!</h1>
    </div>
  </div>
);
const InterlogexContent = (
  <Content id="content">
    <Grid>
      <Cell col={12}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contato" component={ContactPage} />
          <Route exact path="/quemsomos" component={About} />
          <Route exact path="/areacliente" component={ClientAreaPage} />
          <Route exact path="/servicos" component={Services} />
          <Route component={NotFound} />
        </Switch>
      </Cell>
    </Grid>
  </Content>
);

export default class App extends React.Component {
  render(){
    return (
    <BrowserRouter>
      <MuiThemeProvider>
        <div>
        {PreHeader}
        <AppBar title="Interlogex" />
        <MenuInterlogex />
        {InterlogexContent}
        <FooterInterlogex />

      </div>
      </MuiThemeProvider>
    </BrowserRouter>
    );
  }
}

// vinho: 872f54 cinza: 606062
