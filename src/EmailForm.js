import React from 'react';
import { Grid, Cell, Textfield,
	 Spinner, Snackbar } from 'react-mdl';
import request from 'ajax-request';

export default class EmailForm extends React.Component {
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
        if(err || response.statusCode >= 400){
          console.error(err);
          alert("Ocorreu um problema ao enviar o e-mail.\n\nTente novamente ou contate-nos pelo telefone ( 61 ) 3554-5467");
          this.setState({is_send: false, snackbar: true});
          this.validate(form, false);
        }
        else if(response.statusCode >= 200 && response.statusCode < 300){
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

