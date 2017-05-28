import React from 'react';
import { Grid, Cell, Icon,
        Textfield,  } from 'react-mdl';

import 'mdi/css/materialdesignicons.min.css';

export class ContactForm extends React.Component{

  render(){
    return (
      <div>
        <form>
          <Cell col={12}>
          <Textfield label="*Email mail@mail.com" 
            floatingLabel 
            pattern="^([\w\d-.]+)@([\w\d]+\.[\w\d]{2,})(\.[\w\d]{2,})*$" 
            style={{width: "100%"}}/>
          </Cell>
          <Cell col={12}>
          <Textfield label="*Nome" floatingLabel style={{width: "100%"}} /> 
          </Cell>
          <Cell col={12}>
          <Textfield label="Telefone (XX) XXXXX-XXXX" pattern="^\(\d+\) \d+-\d{4,}$" floatingLabel style={{width: "100%"}} />
          </Cell>
          <Cell col={12}>
          <Textfield label="*Assunto" floatingLabel style={{width: "100%"}} />
          </Cell>
          <Cell col={12}>
          <Textfield label="*Mensagem" rows={5} floatingLabel style={{width: "100%"}} />
          </Cell>
        </form>
        <label className="obrigatory">* São campos obrigatórios</label>
      </div>
    );
  }
}

export default class Contact extends React.Component {
  render(){
    return (
      <div className="contato">
        <Grid  className="contact_head">
          <Cell col={12}><h1>CONTATOS</h1></Cell>
        </Grid>
        <Grid >
          <Cell col={6}>
            <h1>Entre em contato</h1>
            <ContactForm />
          </Cell>
          <Cell col={6} className="cell_custom">
            <Cell col={12}>
              Nossas informações para contato

            </Cell>
            <Cell col={12}><h1>Telefones</h1></Cell>
            <div className="card_contact">
              <Cell col={12}>
                <Icon name="phone"/>
                <label className="ddd">(61)</label> 3554-5467
              </Cell>
              <Cell col={12}>
                <Icon name="smartphone"/>
                <label className="ddd">(61)</label> 3554-5467
              </Cell>
              <Cell col={12}>
                <i className="mdi mdi-whatsapp mdi-24px" />
                <label className="ddd">+55 61 </label>3554-54687
              </Cell>
            </div>
            <Cell col={12}><h1>Mídias sociais</h1></Cell>
            <Cell col={12}>
              <Cell col={12}>
                <i className="mdi mdi-facebook mdi-24px" />
                @interlogex
              </Cell>
              <Cell col={12}>
                <Icon name="email" />
                interlogex@interlogex.com.br
              </Cell>
            </Cell>
            <Cell col={12}><h1>Endereço</h1></Cell>
            <Icon name="home" />Vicent Pires - DF, Rua 10, Chácara 175
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}><h1>Localização no mapa</h1></Cell>
          <Cell col={12}>
          <div className="maps">
          Mapa
          </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
