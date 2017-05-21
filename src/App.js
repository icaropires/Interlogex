import React from 'react';
import { Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {
   Icon, Layout, Header, HeaderRow,
   Drawer, Content, Grid, Cell,
   } from 'react-mdl';

import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import logo from "../public/imagem/logo.png";
import deliver_toy from "../public/imagem/deliver_toy.png";
import MaterialLayout from 'react-mdl';
import MenuInterlogex from './Menu';
import FooterInterlogex from './Footer';

import './style.css';
import 'mdi/css/materialdesignicons.min.css';


export default class App extends React.Component {
  render(){
    return (
    <BrowserRouter>
      <div>
      <Layout style={{height: 'unset'}}>
        <div className="pre_header">
          <div>
            <label>Interlogex</label>
            <span>Agora você vai saber o que é entrega</span>
          </div>
          <img src={deliver_toy}></img>
        </div>
        <Header scroll style={{backgroundColor: '#152635', marginTop: '250px'}}>
            <MenuInterlogex />
        </Header>
        <Drawer title="Interlogex">
          <MenuInterlogex />
        </Drawer>
        <Content id="content">
        <Grid>
          <Cell col={12}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </Cell>
        </Grid>
        </Content>
        <FooterInterlogex />
      </Layout>
      </div>
    </BrowserRouter>
    );
  }
}

// vinho: 872f54 cinza: 606062
