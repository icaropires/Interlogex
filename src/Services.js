import React, { Component }from 'react';
import {Card, CardTitle, CardText, CardActions,
        Button, List, ListItem, ListItemContent,
        Grid, Cell
        } from 'react-mdl';

import service_base from '../public/imagem/our_service_2.jpg';
import controll from '../public/imagem/have_controll.jpg';
import schedule from '../public/imagem/schedule.jpg';
import togo from '../public/imagem/to_go_2.jpg';

export default class Services extends Component {
    render() {
		return(
			<div className="service">
        <h1>Serviços</h1>
        Nós fornecemos vários tipos de serviços além de uma simples entrega de pacotes, conheça abaixo um pouco mais.
        <Cell id="service_container">
          <div className="service_content">
            <img src={service_base} />
            <h2>Coleta e entrega</h2>
            <p>Economize seu tempo e fique tranquilo quando desejar encomendar nossos serviços, pois nossa equipe se responsabiliza pela coleta e entrega dos pacotes nos locais combinados.</p>
          </div>
        </Cell>
        <Cell id="service_container">
          <div className="service_content">
            <h2>Programe as entregas</h2>
            <p>Economize seu tempo, e tenha garantida entregas nos horários que desejar. Nós agendamos as coletas de pacotes, no horário que desejar e garantimos que seja entregue logo após.{//<img src={schedule} style={{float: 'right'}} />
             }</p>
          </div>
        </Cell>
        <Cell id="service_container">
          <div className="service_content">
            <img src={controll} />
            <h2>Tenha o controle</h2>
            <p>Fornecemos um serviço de acompanhamento dos serviços em nossa página web, que possibilita que você acompanhe as etapas até que o serviço seja concluido. <br />
            Saiba inclusive, quando o pacote chegou a sua destinação final, pois confirmamos a entrega.</p>
          </div>
        </Cell>
        <Cell id="service_container">
          <div className="service_content">
            <img src={togo} />
            <h2>Comodidade</h2>
            <p>Levamos as encomendas onde precisam ser levadas. Seja ao cartório, a alguém que precise assinar, até que seje entregue a sua destinação final.</p>
          </div>
        </Cell>
      </div>
		);
	}
}
