import React, { Component }from 'react';
import {Card, CardTitle, CardText, CardActions,
        Button, List, ListItem, ListItemContent
        } from 'react-mdl';

import service_base from '../public/imagem/our_service_2.jpg';
import controll from '../public/imagem/have_controll.jpg';
import schedule from '../public/imagem/schedule.jpg';
import togo from '../public/imagem/to_go_2.jpg';

export default class Services extends Component {
    render() {
		return(
			<div>
        <h1>Serviços</h1>
        Nós fornecemos vários tipos de serviços além de uma simples entrega de pacotes, conheça abaixo um pouco mais.
        <div><img src={service_base} style={{float: 'left'}} />
          <h2>Coleta e entrega</h2>
          Economize seu tempo e fique tranquilo quando desejar encomendar nossos serviços, pois nossa equipe se responsabiliza pela coleta e entrega dos pacotes nos locais combinados.
        </div>
        <div>
          <h2>Programe as entregas</h2>
           Economize seu tempo, e tenha garantida entregas nos horários que desejar. Nós agendamos as coletas de pacotes, no horário que desejar e garantimos que seja entregue logo após.<img src={schedule} style={{float: 'right'}} />
        </div>
        <div>
          <h2>Tenha o controle</h2>
          Fornecemos um serviço de acompanhamento dos serviços em nossa página web, que possibilita que você acompanhe as etapas até que o serviço seja concluido. <br /><img src={controll} style={{float: 'left'}} />
          Saiba inclusive, quando o pacote chegou a sua destinação final, pois confirmamos a entrega.
        </div>
        <div>
          <h2>Comodidade</h2>
          <img src={togo} style={{float: 'right'}} />Levamos as encomendas onde precisam ser levadas. Seja ao cartório, a alguém que precise assinar, até que seje entregue a sua destinação final.
        </div>
      </div>
		);
	}
}
