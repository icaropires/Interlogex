import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import {Card, CardTitle, CardText, CardActions,
        Button, List, ListItem, ListItemContent
        } from 'react-mdl';

import header from '../public/imagem/header.png';
import business from '../public/imagem/business.png';
import negotiation from '../public/imagem/client_handle.jpg';

class CardHome extends React.Component {
  render(){
    return (
        <Card shadow={5} className="card_layout">
          <div className="card_head">
            <img src={this.props.image} />
          </div>
          <CardTitle id="card_head_title">{this.props.title}</CardTitle>
          <CardText>
            {this.props.children}
          </CardText>
          <CardActions border>
            <Link to={this.props.link.url}><Button colored ripple>{this.props.link.text}</Button></Link>
          </CardActions>
        </Card>
    );
  }
}
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <CardHome image={business} title={"Um pouco sobre nós"} link={{url: '/quemsomos', text: 'Leia mais'}}>
          <div>
            A empresa InterlogEx presta serviço de entrega rápida em carro utilitário e moto, tendo uma equipe devidamente especializada e apta a prestar serviços no Distrito Federal e Goiás.
          </div>
        </CardHome>
        <CardHome image={header} title={"Nossos Serviços"}  link={{url: '/servicos', text: 'Veja mais serviços'}}>
          <div>
            Transportamos suas mercadorias com agilidade, compromisso, eficiência e rapidez em todo Distrito Federal e Goiás.
            <br />
            Vantagens em nos contratar:
            <List >
              <ListItem style={{color: '#757575'}}>
                <ListItemContent icon="location_on">Rastreamento da carga</ListItemContent>
              </ListItem>
              <ListItem style={{color: '#757575'}}>
                <ListItemContent icon="assignment_turned_in">Confirmação de entrega</ListItemContent>
              </ListItem>
              <ListItem style={{color: '#757575'}}>
                <ListItemContent icon="map">Coleta e entrega no local desejado</ListItemContent>
              </ListItem>
              <ListItem style={{color: '#757575'}}>
                <ListItemContent icon="schedule">Coletas programadas com flexibilidade de horários</ListItemContent>
              </ListItem>
            </List>
          </div>
        </CardHome>
        <CardHome image={negotiation} title={"Clientes"} link={{url: '/contato', text: 'Entre em contato'}}>
          <div>
            Temos um público de clientes diversificado, o que nos força a ter uma equipe comprometida, eficiente, especializada e em constante busca pela excelência na qualidade dos serviços.
          </div>
        </CardHome>
      </div>
    );
  }
}
