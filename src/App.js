import React from 'react';
import { Route, Switch} from 'react-router';
import {BrowserRouter, Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/Menu';

import {
   Icon, Layout, Header, HeaderRow,
   Drawer, Content, Grid, Cell,
   Card, CardTitle, CartText, CardActions
   } from 'react-mdl';

import Home from './Home';
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
  <div className="pre-header">
    <div className="pre-header-text">
      <div className="title"><img src={logo} /></div>
      <div>O jeito certo de fazer entrega!</div>
      <div className="content-attention"><span className="attention">Ligue já!</span> <span className="ddd">(61)</span> 3554-5467</div>
    </div>
  </div>
);
const InterlogexContent = (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contato" component={ContactPage} />
        <Route exact path="/areacliente" component={ClientAreaPage} />
        <Route exact path="/servicos" component={Services} />
        <Route component={NotFound} />
      </Switch>
    </div>
);

export default class App extends React.Component {
  componentDidMount(){
    setInterval(function(e){
      const element = document.getElementsByClassName("content-attention")[0];
      const background = element.style.background;
      element.style.background = (background === "rgb(255, 255, 99)" ? "rgba(255, 255, 255, 0)" : "rgb(255, 255, 99)");
    }, 1000);
  }
  render(){
        //
    return (
    <BrowserRouter>
      <MuiThemeProvider>
        <div>
        {PreHeader}
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
