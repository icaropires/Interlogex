import React from 'react';
import { Route, Switch} from 'react-router';
import {BrowserRouter, Link, NavLink} from 'react-router-dom';
import {
   Icon, Grid, Cell, Footer,
   FooterSection, FooterLinkList, 
   Layout, Navigation, Header, HeaderRow,
   Drawer, Content, 
   } from 'react-mdl';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import logo from "../public/imagem/logo.png";
import MaterialLayout from 'react-mdl';

import './style.css';

class Interlogex extends React.Component {
  constructor(props){
    super(props);
    this.state = {'linkState': Array(4).fill(""), 'prev': 0};
    this.handleClick = this.handleClick;
    this.state.linkState[0]="selected";
  }
  handleClick(e, j){
    console.log(e,j);
    this.state.linkState[this.state.prev]="";
    this.setState({prev: e});
    this.state.linkState[e]="selected";
  }
  render(){
    return (
        <Navigation>
            <Link className={this.state.linkState[0]} onClick={this.handleClick.bind(this,0)} to="/">Home</Link>
            <Link to="/quemsomos" className={this.state.linkState[1]} onClick={this.handleClick.bind(this,1)}>Sobre nós</Link>
            <Link to="/servicos" className={this.state.linkState[2]} onClick={this.handleClick.bind(this,2)}>Serviços</Link>
            <Link to="/contato" className={this.state.linkState[3]}onClick={this.handleClick.bind(this,3)}>Contatos</Link>
        </Navigation>
    );
  }
}

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
          <img src={logo}></img>
        </div>
        <Header scroll style={{backgroundColor: '#152635', marginTop: '250px'}}>
            <Interlogex />
        </Header>
        <Drawer title="Interlogex">
          <Interlogex />
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
        </Content>
      </Layout>
      </div>
    </BrowserRouter>
    );
  }
}

// vinho: 872f54 cinza: 606062
