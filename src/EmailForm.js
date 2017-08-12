import React from 'react';
import TextField from 'material-ui/TextField';
import { Grid, Cell, Textfield,
	 Spinner, Snackbar } from 'react-mdl';
import request from 'ajax-request';

export default class EmailForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { forms: {}, is_send: false, snackbar: false };
    this.handleForm = this.handleForm.bind(this);
    this.handleTimeout = this.handleTimeout.bind(this);
    this.valid = this.valid.bind(this);
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
  valid(event, value){
    const forms = this.state.forms;
    if(event.target.name === "email"){
      forms['email'] = !/^(\w|-|\.)+@\w+\.\w{2,}(\.\w{2,})*$/g.test(value);
    }
    if(event.target.name === "name"){
      forms['name'] = value.length <= 0;
    }
    if(event.target.name === "body"){
      forms['body'] = value.length <= 0;
    }
    if(event.target.name === "subject"){
      forms['subject'] = value.length <= 0;
    }

    this.setState({forms});
    console.log(this.state);
    console.log(event, value);
  }

  render(){
    if(!this.state.is_send){
      return (
        <div>
          <form onSubmit={this.handleForm}>
            <Cell col={12}>
              <TextField hintText="Seu e-mail..." 
                floatingLabelText="Email mail@mail.com"
                pattern="^(\w|-|\.)+@\w+\.\w{2,}(\.\w{2,})*$" 
                errorText={this.state.forms.email && "O email deve seguir o formato mail seguido de @ e depois o domínio (gmail.com, yahoo.com.br, hotmail.com)"}
                fullWidth={true}
                name="email"
                onChange = {this.valid}
                hintStyle={{color:'#152635'}} />
            </Cell>
            <Cell col={12}>
              <TextField hintText="Digite seu nome..."
                floatingLabelText="Nome"
                fullWidth={true}
                hintStyle={{color:'#152635'}}
                errorText={this.state.forms.name && "Seu nome é obrigatório"}
                onChange={this.valid}
                name="name" /> 
            </Cell>
            <Cell col={12}>
              <TextField
                 hintText="(XX) XXXXX-XXXX"
                 floatingLabelText="Telefone (XX) XXXXX-XXXX" 
                 fullWidth={true} 
                 pattern="^\(\d+\) \d+-\d{4,}$" 
                 name="phone"
                 hintStyle={{color:'#152635'}}
              />
            </Cell>
            <Cell col={12}>
              <TextField hintText="Entre com assunto do e-mail..."
                floatingLabelText="*Assunto"
                hintStyle={{color:'#152635'}}
                fullWidth={true}
                errorText={this.state.forms.subject && "Assunto do e-mail é obrigatório"}
                onChange={this.valid}
                name="subject" />
            </Cell>
            <Cell col={12}>
              <TextField hintText="Digite aqui a mensagem..."
                floatingLabelText="*Mensagem"
                fullWidth={true}
                multiLine={true}
                rows={4}
                onChange={this.valid}
                errorText={this.state.forms.body && "Este campo é obrigatório, pois é o corpo do e-mail"}
                hintStyle={{color:'#152635'}}
                name="body"/>
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

