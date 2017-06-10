import React, { Component } from 'react';
import ClientLogin from './ClientLogin';
import Comment from './Comment';
import { Grid, Cell } from 'react-mdl';

export default class ClientArea extends Component {
    render() {
        return(
          <div className="client">
	        <Grid  className="page_head client_head">
	          <Cell col={12}>
	            <h1>ACOMPANHE SEUS PEDIDOS</h1>
	          </Cell>
	        </Grid>
   	        <Grid >
              <Cell col={6}>
	            <h1>Login</h1>
	            <ClientLogin />
	          </Cell>
	          <Cell col={6} className="cell_custom">
	          	<Cell col={12}>
			      <h1>Avaliações</h1>
		          <Comment url="interlogex.com.br/areacliente"/>
		        </Cell>
              </Cell>
	        </Grid>
          </div>
        ); 
    }
}
