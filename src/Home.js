import React from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl';

import header from '../public/imagem/header.png';
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Card shadow={5} className="card_layout">
          <div className="card_head">
            <img src={header} />
          </div>
          <CardTitle id="card_head_title">Um pouco sobre nós</CardTitle>
          <CardText>
      Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto
      <br />
      É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de Conteúdo
          </CardText>
        </Card>
        <Card shadow={5} className="card_layout">
          <div className="card_head">
            <img src={header} />
          </div>
          <CardTitle id="card_head_title">Um pouco sobre nós</CardTitle>
          <CardText>
      Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto
      <br />
          </CardText>
        </Card>
      </div>
    );
  }
}
