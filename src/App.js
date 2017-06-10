import React from 'react';
import { Route, Switch} from 'react-router';
import {BrowserRouter, Link} from 'react-router-dom';
import {
   Icon, Layout, Header, HeaderRow,
   Drawer, Content, Grid, Cell,
   Card, CardTitle, CartText, CardActions
   } from 'react-mdl';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import ClientArea from './ClientArea';
import NotFound from './NotFound';
import logo from "../public/imagem/logo_cabecalho.png";
import telefone from "../public/imagem/telefone.png";
import MaterialLayout from 'react-mdl';
import MenuInterlogex from './Menu';
import FooterInterlogex from './Footer';

import './style.css';
import 'mdi/css/materialdesignicons.min.css';
const PreHeader = (
        <div className="pre_header">
          <img src={logo} className="logo" />
          <img src={telefone} className="phone" />
          <div>
            <h1>O jeito certo de fazer entregas!</h1>
          </div>
          <div className="separator" />
        </div>
);
const InterlogexContent = (
        <Content id="content">
          <Grid>
            <Cell col={12}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contato" component={Contact} />
                <Route exact path="/quemsomos" component={About} />
                <Route exact path="/areacliente" component={ClientArea} />
                <Route component={NotFound} />
              </Switch>
            </Cell>
          </Grid>
        </Content>
);

// <img src={deliver_toy}></img>
export default class App extends React.Component {
  render(){
    return (
    <BrowserRouter>
      <Layout style={{height: 'unset', minWidth: '420px'}}>
        {PreHeader}
        <Header scroll style={{backgroundColor: '#152635', marginTop: '250px'}}>
            <MenuInterlogex />
        </Header>
        <Drawer title="Interlogex">
          <MenuInterlogex />
        </Drawer>
        {InterlogexContent}
        <FooterInterlogex />
        
      </Layout>
    </BrowserRouter>
    );
  }
}

// vinho: 872f54 cinza: 606062
