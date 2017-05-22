import React from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl';

import header from '../public/imagem/header.png';
import business from '../public/imagem/business.png';
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Card shadow={5} className="card_layout">
          <div className="card_head">
            <img src={business} />
          </div>
          <CardTitle id="card_head_title">Um pouco sobre nós</CardTitle>
          <CardText>
          Nós procuramos ser a melhor empresa de transporte para se trabalhar. Queremos oferecer serviços de transporte com qualidade, eficiência, responsabilidade e ética para nossos clientes.
          <br />
          <br />
          A InterlogEx tem sua sede na cidade de Vicente Pires/DF e buscamos atender a todo o Distrito Federal e regiões próximas a ele.
          </CardText>
        </Card>
        <Card shadow={5} className="card_layout">
          <div className="card_head">
            <img src={header} />
          </div>
          <CardTitle id="card_head_title">Nossos Serviços</CardTitle>
          <CardText>
            Realizamos busca e entrega de pacotes.
          </CardText>
        </Card>
      </div>
    );
  }
}
