import React, { Component } from 'react';
import { Grid, Cell, Textfield } from 'react-mdl';
import TextField from 'material-ui/TextField';

export default class ClientLogin extends Component {
    render(){
        return(
          <div className="divider-content">
            <form name="form" method="post" action="http://areacliente.sistemamotofrete.com.br/acesso.aspx"> 
              <input type="hidden" name="chave" value="Q4dSjBTfe48Asq7xCrEA3arLb9XuEN3L0N3cyu4dv8M=" />
              <div>
                <TextField hintText="Digite seu id..."
                  name="loginusuario" floatingLabelText="ID de acesso"
                  hintStyle={{color: "#152635"}} 
                  fullWidth
                  underlineStyle={{borderColor: "#000000"}}/> 
              </div>
              <div>
                <TextField hintText="Entre com sua senha..."
                  name="loginsenha" type='password' 
                  floatingLabelText="Senha de acesso"
                  hintStyle={{color: "#152635"}} 
                  fullWidth
                  underlineStyle={{borderColor: "#000000"}} /> 
              </div>
              <div style={{textAlign: "left", marginTop: "20px"}} >
              <input type="submit" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored" style={{background: '#152635', color: '#9f9f9f'}} value="Entrar" />
              </div>
            </form>
          </div>
        );	
    }
}
