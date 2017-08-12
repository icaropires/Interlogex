import React, { Component } from 'react';
import ClientLogin from './ClientLogin';
import Comment from './Comment';
import { Grid, Cell } from 'react-mdl';

export default class ClientArea extends Component {
    render() {
        return(
          <div id='clientArea' className="divider">
            <div  className="client_head">
            </div>
            <div className="home-title">
              <span>ACOMPANHE SEUS PEDIDOS</span>
            </div>
            <div className="divider-content" style={{overflow: 'hidden'}}>
              <div className="divider-split">
                <div className="home-subtitle">
                  <span>Login</span>
                </div>
                <ClientLogin />
              </div>
              <div className="divider-split">
                <div className="home-subtitle">
                  <span>Avaliações</span>
                </div>
                <Comment url="interlogex.com.br/areacliente"/>
              </div>
            </div>
          </div>
        ); 
    }
}
