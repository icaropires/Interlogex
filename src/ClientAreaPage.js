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
              <span><b>A</b>COMPANHE SEUS PEDIDOS</span>
            </div>
            <div className="divider-content" style={{overflow: 'hidden'}}>
              <div className="divider-split">
                <div className="home-subtitle">
                  <span><b>L</b>ogin</span>
                </div>
                <ClientLogin />
              </div>
              <div className="divider-split">
                <div className="home-subtitle">
                  <span><b>A</b>valiações</span>
                </div>
                <Comment url="interlogex.com.br/areacliente"/>
              </div>
            </div>
          </div>
        ); 
    }
}
