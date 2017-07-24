import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import {Card, CardTitle, CardText, CardActions,
        Button, List, ListItem, ListItemContent
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
        <Card shadow={5} id="card_layout" className="card_layout" style={{height: '780px'}}>
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

export default class Home extends React.Component {
  render() {
    return (
      <div>

    <Slides arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            dots={Dots}
            duration={300}
            autoplay
            delay={1000}>
     <div className="one">
      <img style={{height: "100%"}} src={services} />
     </div>
     <div className="two">
      <img style={{height: "100%"}} src={negotiation} />
    </div>
     <div className="three"> 
     <img style={{height: "100%"}} src={business_values} />
      </div>
     <div className="four">
      <img style={{height: "100%"}} src={business_values} />
    </div>
   </Slides>
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
