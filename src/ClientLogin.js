import React, { Component } from 'react';
import { Grid, Cell, Textfield } from 'react-mdl';

export default class ClientLogin extends Component {
    render(){
        return(
          <div>
	    <h1>Login</h1>
            <form name="form" method="post" action="http://areacliente.sistemamotofrete.com.br/acesso.aspx"> 
              <input type="hidden" name="chave" value="Q4dSjBTfe48Asq7xCrEA3arLb9XuEN3L0N3cyu4dv8M=" />
              <Cell col={12}>
                <Textfield label="ID de Acesso"
                  name="loginusuario" floatingLabel/> 
              </Cell>
              <Cell col={12}>
                <Textfield label="Senha de Acesso"
                  name="loginsenha" type='password' floatingLabel/> 
              </Cell>
              <Cell col={12}>
              <input type="submit" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored" style={{background: '#152635', color: '#9f9f9f'}} value="Entrar" />
              </Cell>
            </form>
          </div>
        );	
    }
}
