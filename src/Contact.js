import React from 'react';
import { Grid, Cell, Icon,
        Textfield, Button, Spinner, Snackbar } from 'react-mdl';
import ContactMap from './ContactMap';
import 'mdi/css/materialdesignicons.min.css';
import request from 'ajax-request';

export class ContactForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { forms: {}, is_send: false, snackbar: false };
    this.handleForm = this.handleForm.bind(this);
    this.handleTimeout = this.handleTimeout.bind(this);
  }
  handleForm(event_submit) {
    this.setState({is_send: true});
    event_submit.preventDefault();
    const form = event_submit.target;
    if(this.validate(form, true)){
      const data = {
        email: form.email.value,
        name: form.name.value,
        phone: form.phone.value,
        subject: form.subject.value,
        body: form.body.value
      };
      this.submitEmail(data, form);
    }
  }

  handleTimeout(){
    this.setState({snackbar: false});
  }
  submitEmail(data, form){
    request({
        url: '/contato',
        method: 'POST',
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      }, function(err, response, body){
        if(err){ console.error(err)}
        else if(response.statusCode >= 200 && response.statusCode < 300){
          console.log(body);
          form.email.value = "";
          form.name.value = "";
          form.subject.value = "";
          form.body.value = "";
          form.phone.value = "";
          this.validate(form, false);
          this.setState({is_send: false, snackbar: true});
        }
      }.bind(this));
  }
  validate(form, state){
    this.setState({forms: {name: state, email: state,
      subject: state, body: state}});
    return form.email.value.length 
      && form.name.value.length 
      && form.subject.value.length
      && form.body.value.length;
  }

  render(){
    if(!this.state.is_send){
      return (
        <div>
          <form onSubmit={this.handleForm}>
            <Cell col={12}>
              <Textfield label="*Email mail@mail.com" 
                floatingLabel 
                pattern="^(\w|-|\.)+@\w+\.\w{2,}(\.\w{2,})*$" 
                style={{width: "100%"}}
                required={this.state.forms.email}
                name="email" />
            </Cell>
            <Cell col={12}>
              <Textfield label="*Nome" floatingLabel style={{width: "100%"}} required={this.state.forms.name} name="name"/> 
            </Cell>
            <Cell col={12}>
              <Textfield label="Telefone (XX) XXXXX-XXXX" pattern="^\(\d+\) \d+-\d{4,}$" floatingLabel style={{width: "100%"}} name="phone"/>
            </Cell>
            <Cell col={12}>
              <Textfield label="*Assunto" floatingLabel style={{width: "100%"}}  required={this.state.forms.subject} name="subject" />
            </Cell>
            <Cell col={12}>
              <Textfield label="*Mensagem" rows={5} floatingLabel style={{width: "100%"}}  required={this.state.forms.body} name="body"/>
            </Cell>
            <Cell col={12}>
              <input type="submit" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored" style={{background: '#152635', color: '#9f9f9f'}} value="Enviar e-mail" />
            </Cell>
          </form>
          <label className="obrigatory">* São campos obrigatórios</label>
          <Snackbar active={this.state.snackbar} onTimeout={this.handleTimeout}>
            Email foi enviado!
          </Snackbar>
        </div>
      );
    } else {
      return (<div>Enviando...<br /><Spinner /></div>);
    }
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
          <Cell col={12} className="maps">
          <ContactMap  />
          </Cell>
        </Grid>
      </div>
    );
  }
}
