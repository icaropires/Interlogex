import React, { Component }from 'react';
import {Card, CardTitle, CardText, CardActions,
        Button, List, ListItem, ListItemContent
        } from 'react-mdl';

class CardServices extends React.Component {
  render(){
    return (
        <Card shadow={5} className="card_layout" style={{height: '92%'}}>
          <div className="card_head">
            <img src={this.props.image} />
          </div>
          <CardTitle id="card_head_title">{this.props.title}</CardTitle>
          <CardText style={{minHeight: '50%'}}>
            {this.props.children}
          </CardText>
          <CardActions border>
          </CardActions>
        </Card>
    );
  }
}

export default class Services extends Component {
    render() {
		return(
			<div>
				<CardServices>
					<CardTitle style={{color: '#000', height: '85px'}}>Planos de contratação</CardTitle>
					<List style={{padding: '0'}}>
					  <ListItem style={{color: '#757575', padding:'0'}}>
						<ListItemContent icon="">Entregas Simples</ListItemContent>
					  </ListItem>
					  <ListItem style={{color: '#757575', padding:'0'}}>
						<ListItemContent icon="">Por hora</ListItemContent>
					  </ListItem>
					  <ListItem style={{color: '#757575', padding:'0'}}>
						<ListItemContent icon="">Mensalmente</ListItemContent>
					  </ListItem>
					</List>
				</CardServices>

				<CardServices>
					<CardTitle style={{color: '#000', height: '85px'}}>Vantagens em nos contratar</CardTitle>
					<List style={{padding: '0'}}>
					  <ListItem style={{color: '#757575', padding:'0'}}>
						<ListItemContent icon="location_on">Rastreamento da carga</ListItemContent>
					  </ListItem>
					  <ListItem style={{color: '#757575', padding:'0'}}>
						<ListItemContent icon="assignment_turned_in">Confirmação de entrega</ListItemContent>
					  </ListItem>
					  <ListItem style={{color: '#757575', padding:'0'}}>
						<ListItemContent icon="map">Coleta e entrega no local desejado</ListItemContent>
					  </ListItem>
					  <ListItem style={{color: '#757575', padding:'0'}}>
						<ListItemContent icon="schedule">Coletas programadas com flexibilidade de horários</ListItemContent>
					  </ListItem>
					</List>
				</CardServices>

				<CardServices>
					<CardTitle style={{color: '#000', height: '85px'}}>Tipos de veículos</CardTitle>
					<List style={{padding: '0'}}>
					  <ListItem style={{color: '#757575', padding:'0'}}>
						<ListItemContent icon="">Utilitário</ListItemContent>
					  </ListItem>
					  <ListItem style={{color: '#757575', padding:'0'}}>
						<ListItemContent icon="">Moto</ListItemContent>
					  </ListItem>
					</List>
				</CardServices>
			</div>
		);
	}
}
