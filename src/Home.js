import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem, ListItemContent
        } from 'react-mdl';
import { ArrowLeft, ArrowRight, Dots, Slides } from 'react-infinite-slide';
import services from '../public/imagem/our_service.jpg';
import business from '../public/imagem/who_we_are.jpg';
import business_values from '../public/imagem/business.jpg';
import negotiation from '../public/imagem/client_handle_2.jpg';

// <Link to={this.props.link.url}><Button colored ripple>{this.props.link.text}</Button></Link>
class CardHome extends React.Component {
  render(){
    return (
        <div id="card_layout" className="card_layout" style={{height: '780px'}}>
          <div className="card_head">
            <img src={this.props.image} />
          </div>
          <div id="card_head_title">{this.props.title}</div>
          <div style={{minHeight: '50%'}}>
            {this.props.children}
          </div>
        </div>
    );
  }
}
class CardService extends React.Component {
  render(){
    return (
      <Card>
        <CardHeader
          title="Motoboy"
          subtitle="Contrato exclusivo"
        />
        <CardMedia
          overlay={<CardTitle title="Motoboy" subtitle="Contrato exclusivo" />}
    >
          <img src="https://blog.loggi.com/wp-content/uploads/2014/08/mensageiros3.jpg" alt="" />
        </CardMedia>
        <CardText>
          Contrate um de nossos motoboys de forma exclusiva! Recrute-o por 1 dia, 1 semana ou o tempo que necessitar!
        </CardText>
    <CardActions>
      <FlatButton label="Action1" />
    </CardActions>
  </Card>
    );
  }
}

export default class Home extends React.Component {
  render() {
    return (
<div>
  <Slides arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            dots={Dots}
            duration={300}
            delay={3000}
            width="100%"
            style={{marginLeft: "0px"}}>
    <div className="slide-card">
      <div className="slide-image">
        <h2>Descubra nossos serviços</h2>
        <img  src={services} />
      </div>
      <div className="slide-text">
        Transportamos suas mercadorias com agilidade, compromisso, eficiência e rapidez em todo Distrito Federal e Goiás.
      </div>
    </div>
    <div className="slide-card">
      <div className="slide-image">
        <h2>Relacionamento com os clientes</h2>
        <img  src={negotiation} />
      </div>
      <div className="slide-text">
        Nossos clientes são diversificados e, para atendermos cada vez melhor, buscamos sempre excelência em nossos serviços.
      </div>
    </div>
    <div className="slide-card">
      <div className="slide-image">
        <h2>Descubra quem somos</h2>
        <img  src={business_values} />
      </div>
      <div className="slide-text">
        Nós somos uma empresa de transporte de pequenos volumes e documentos sediada no Distrito Federal.
      </div>
    </div>
    <div className="slide-card">
      <div className="slide-image">
        <h2>Saiba como nós pensamos</h2>
        <img  src={business} />
      </div>
      <div className="slide-text">
        A nossa visão de negócio e que norteia nosso trabalho são baseados na nossa <strong>VISÃO</strong>, <strong>MISSÃO</strong> e <strong>VALORES</strong> 
      </div>
    </div>
  </Slides>
  <Divider />
  <h2>Serviços</h2>
  <div className="card-wrapper">
    <div className="card-item">
      <CardService />
    </div>
    <div className="card-item">
    </div>
  </div>
  <Divider />
        <CardHome image={services} title={"Nossos Serviços"}  link={{url: '/servicos', text: 'Veja mais serviços'}}>
          <div>
            Transportamos suas mercadorias com agilidade, compromisso, eficiência e rapidez em todo Distrito Federal e Goiás.
            <br />
            Vantagens em nos contratar:
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
          </div>
        </CardHome>

        <CardHome image={negotiation} title={"Clientes"} link={{url: '/contato', text: 'Entre em contato'}}>
          <div>
            <p>Nossos clientes são diversificados e, para atendermos cada vez melhor, buscamos sempre excelência em nossos serviços.</p>
            <p>Acreditamos que a melhor propaganda será a indicação dos nossos serviços.</p>
            <p>Não abrimos mão de nossos valores e assim a cada dia construímos uma empresa que cumpre suas obrigações com os clientes, com os colaboradores e com a sociedade.</p>
            <p>Para tanto, dispomos de uma equipe comprometida, eficiente, especializada e em busca constante pela excelência na qualidade dos serviços.</p>
          </div>
        </CardHome>

        <CardHome image={business_values} title={"Um pouco sobre nós"} link={{url: '/quemsomos', text: 'Leia mais'}}>
          <div>
            <p>Nós somos uma empresa de transporte de pequenos volumes e documentos sediada no Distrito Federal.</p>
            <p>Entregas rápidas e eficientes caracterizam nosso serviço, para isso contamos com uma equipe especializada, apta a prestar serviços em todo território nacional.</p>
            <p>Para isto, contamos com uma boa equipe de entregadores e excelentes em relacionamento com os clientes. Atendentes preparados para oferecer o melhor serviço a sua necessidade.</p>
          </div>
        </CardHome>

        <CardHome image={business} title={"O negócio"} link={{url: '/quemsomos', text: 'Leia mais'}}>
          <div>
            <p>A nossa visão de negócio e que norteia nosso trabalho são baseados na nossa <strong>VISÃO</strong>, <strong>MISSÃO</strong> e <strong>VALORES</strong> </p>
            <p><strong>Valores: </strong>Trabalhamos de forma <strong>ética</strong>, buscamos a <strong>retidão</strong> na prestação de nossos serviços para nos mantermos na linha da <strong>justiça</strong>.</p>
            <p><strong>Visão:</strong> Ser a melhor empresa de transportes para se trabalhar e de prestação de serviços.</p>
            <p><strong>Missão:</strong> Oferecer serviços de transporte com eficiência, ética, qualidade e responsabilidade.</p>
          </div>
        </CardHome>


      </div>
    );
  }
}
