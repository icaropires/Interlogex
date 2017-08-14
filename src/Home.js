import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import {blueA200} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import CheckBoxIcon from 'material-ui/svg-icons/action/check-circle';
import FontIcon from 'material-ui/FontIcon';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem, ListItemContent
        } from 'react-mdl';
import { ArrowLeft, ArrowRight, Dots, Slides } from 'react-infinite-slide';
import EmailForm from './EmailForm';
import services from '../public/imagem/our_service.jpg';
import business from '../public/imagem/who_we_are.jpg';
import business_values from '../public/imagem/business.jpg';
import negotiation from '../public/imagem/client_handle_2.jpg';
import interlogexLogo from '../public/imagem/logo2.png';
import interlogex from '../public/imagem/business.png';
import contract from '../public/imagem/contract.jpg';
import byTime from '../public/imagem/by_time.jpg';
import schedule from '../public/imagem/schedule.jpg';
import byDistance from '../public/imagem/by_distance.jpg';

// <Link to={this.props.link.url}><Button colored ripple>{this.props.link.text}</Button></Link>

class CardService extends React.Component {
  render(){
    return (
      <Card>
        <CardHeader
          title={this.props.mainTitle}
          subtitle={this.props.mainSubTitle}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia
          overlay={<CardTitle
            title={this.props.overlayTitle}
            subtitle={this.props.overlaySubTitle} />}
          >
            <img src={this.props.image} alt="" />
          </CardMedia>
          <CardText expandable={true}>
            <div className="home-card-content">
              {this.props.children}
            </div>
          </CardText>
          <CardActions>
            <Divider />
            <Link to={"/servicos#"+this.props.link}><FlatButton label="Veja mais!" /></Link>
          </CardActions>
        </Card>
      );
  }
}

const depoimentList = [<i>"Com a interlogex, eu conseguir ganhar tempo, pois não precisei esperar em filas de banco. O próprio entregador foi e resolveu pra mim" - <b>Cliente Anônimo</b></i>, <i> "Tudo que precisei entregar, a Interlogex me atendeu,<strong>super recomento</strong>" - <b>Cliente Anônimo</b></i>, <i>"Não preciso mais me preocupar com manutenção de carro e salário de funcionário para ter alguém disponível para realizar serviços de lógistica" - <b>Cliente Anônimo</b></i>];


export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.showScroll = this.showScroll.bind(this);
    this.state={'scroll': true, 'depoimentCount': 0};
  }

  componentWillMount(){
    this.setState({interval: setInterval(function(){
      const element = document.getElementById("home-paper");
      element.style.opacity="0"; 
      setTimeout(function(){
        this.setState({'depoimentCount': (this.state.depoimentCount+1) % depoimentList.length})
        element.style.opacity="1";}.bind(this), 600);
    }.bind(this), 3000)});
  }

  componentWillUnmount(){
    clearInterval(this.state.interval);
  }

  componentDidMount(){
    window.onscroll = this.showScroll;
  }

  showScroll(event){
    if(this.state.scroll === true){
      if(document.getElementsByClassName('home-about')[0].offsetTop-400 < window.scrollY){
        const itemList = document.querySelectorAll(".home-objective-item");
        let count = 0;
        itemList.forEach(function(e){
          setTimeout(function(){
            e.style.marginLeft="100px";
            setTimeout(function(){
              e.children[0].style.color="#448aff";
              e.style.color="#000";
            }, 1000);
          }
          ,count);
          count += 1000;});
        this.setState({'scroll': false});
      }
    }
  }
  openId(hash){
    window.location.hash=hash;
  }
  render() {
    return (
      <div>
        <div className="divider">
          <Slides id='main_slider'
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            dots={Dots}
            autoplay
            duration={800}
            delay={5000}
            width="100%"
          >
            <div className="slide-card">
              <div className="slide-image">
                <img src={interlogexLogo} style={{height: '100%'}}/>
              </div>
            </div>
            <div className="slide-card">
              <div className="slide-image">
                <h2>Descubra nossos serviços</h2>
                <img onClick={this.openId.bind(this, '#service')} src={services} />
              </div>
              <div className="slide-text">
                Transportamos suas mercadorias com agilidade, compromisso, eficiência e rapidez em todo Distrito Federal e Goiás. <br />
                <Link to="#service"><RaisedButton label="Ver" /></Link>
              </div>
            </div>
            <div className="slide-card">
              <div className="slide-image">
                <h2>Relacionamento com os clientes</h2>
                <img onClick={this.openId.bind(this, '#client')} src={negotiation} />
              </div>
              <div className="slide-text">
                Nossos clientes são diversificados e, para atendermos cada vez melhor, buscamos sempre excelência em nossos serviços.<br /><Link to="#client"><RaisedButton label="Ver"  /></Link>
              </div>
            </div>
            <div className="slide-card">
              <div className="slide-image">
                <h2>Descubra quem somos</h2>
                <img onClick={this.openId.bind(this, '#about')} src={business_values} />
              </div>
              <div className="slide-text">
                Nós somos uma empresa de transporte de pequenos volumes e documentos sediada no Distrito Federal. <br /><Link to="#about"><RaisedButton label="Ver"  /></Link>
              </div>
            </div>
            <div className="slide-card">
              <div className="slide-image">
                <h2>Saiba como nós pensamos</h2>
                <img onClick={this.openId.bind(this, '#about-business')} src={business} />
              </div>
              <div className="slide-text">
                A nossa visão de negócio e que norteia nosso trabalho são baseados na nossa <strong>VISÃO</strong>, <strong>MISSÃO</strong> e <strong>VALORES</strong><br /><Link to="#about-business"><RaisedButton label="Ver"  /></Link>
              </div>
            </div>
          </Slides>
        </div>
        <div className="divider">
          <div className="home-title" id="service"><span>Serviços</span></div>
          <div className="card-wrapper">
            <div className="card-item">
              <CardService
                mainTitle="Contratos"
                overlayTitle="Exclusividade"
                mainSubTitle="Exclusividade"
                image={contract}
                link="exclusive" >
                Contrate um de nossos motoboys de forma exclusiva!
                <Divider />
                Recrute-o por 1 dia, 1 semana ou o tempo que necessitar!
              </CardService>
            </div>
            <div className="card-item">
              <CardService
                mainTitle="Contratos"
                overlayTitle="Agendamento"
                mainSubTitle="Agendamento"
                image={schedule}
                link="schedule" >
                Faça o agendamento das entregas para períodos definidos por você!
                <Divider />
                Escolha um motoboy em específico e agende as entregas.
              </CardService>
            </div>
            <div className="card-item">
              <CardService
                mainTitle="Sob demanda"
                overlayTitle="Por horas"
                mainSubTitle="Quando precisar"
                image={byTime}
                link="by-hour" >
                Contrate um nossos serviços pela quantidade de horas que precisar!
                <Divider />
                Polpe seu dinheiro, pague somente as horas que necessitar das entregas.
              </CardService>
            </div>
            <div className="card-item">
              <CardService
                mainTitle="Sob demanda"
                overlayTitle="Pela distância"
                mainSubTitle="Quando precisar"
                image={byDistance}
                link="by-distance" >
                Faça suas entregas e não se preocupe com o tempo.
                <Divider />
                Calculamos o valor de cada entrega baseado na distância da entrega.
              </CardService>
            </div>
          </div>
        </div>
        <div className="divider">
          <div className="home-title" id="client"><span>Clientes</span></div>
          <div>
            <Paper className="home-paper" style={{marginLeft: "10%"}} zDepth={4}>
              <div id="home-paper">
                {depoimentList[this.state.depoimentCount]}
              </div>
            </Paper>
            <p>Nossos clientes são diversificados e, para atendermos cada vez melhor, buscamos sempre excelência em nossos serviços.
      Não abrimos mão de nossos valores e assim a cada dia construímos uma empresa que cumpre suas obrigações com os clientes, com os colaboradores e com a sociedade.
      Para tanto, dispomos de uma equipe comprometida, eficiente, especializada e em busca constante pela excelência na qualidade dos serviços.
    </p>
    <div className="home-medias">
      <div className="home-subtitle"><span>Mídias sociais</span></div>


      <span className="content">Acreditamos que a melhor propaganda será a indicação dos nossos serviços.<br /></span>
      <span className="content">Veja o que os clientes falam na página do <br /><Link to="https://facebook.com/interlogex" target="_blank"><i className="mdi mdi-facebook mdi-24px" style={{marginRight: '10px'}} /> Facebook</Link><br />

        <Link to="https://instagram.com/interlogex" target="_blank"><i className="mdi mdi-instagram mdi-24px" style={{marginRight: '10px'}} />Instagram</Link> </span>
    </div>

    <div className="home-email">
      <div className="home-subtitle"><span>Mande e-mail</span></div>
      <EmailForm />
    </div>
  </div>
</div>
<div id="about_us" className="divider home-about">
  <img className="home-about-background" src={interlogex} />
  <div className="home-title" id="about"><span>A Interlogex</span></div>
  <div>
    <p>Nós somos uma empresa de transporte de pequenos volumes e documentos sediada no Distrito Federal, e fornecemos: <br />
      <div className="home-objective">
        <div className="home-objective-item">
          <FontIcon className="material-icons">check_box</FontIcon><span>Entregas rápidas</span>
        </div>
        <div className="home-objective-item">
          <FontIcon className="material-icons">check_box</FontIcon><span>Eficiência no atendimento</span>
        </div>
        <div className="home-objective-item">
          <FontIcon className="material-icons">check_box</FontIcon><span>Todo território nacional</span>
        </div>
        <div className="home-objective-item">
          <FontIcon className="material-icons">check_box</FontIcon><span>Qualidade no atendimento</span>
        </div>
        <div className="home-objective-item">
          <FontIcon className="material-icons">check_box</FontIcon><span>Equipe preparada</span>
        </div>
      </div>
      <br />
      Entregas rápidas e eficientes caracterizam nosso serviço, para isso contamos com uma equipe especializada, apta a prestar serviços em todo território nacional.<br />
      Para isto, contamos com uma boa equipe de entregadores e excelentes em relacionamento com os clientes. Atendentes preparados para oferecer o melhor serviço a sua necessidade.</p>
  </div>
  <div id="about-business">
    <div className="home-subtitle"><span>Visão de negócio</span></div>
    <p>A nossa visão de negócio e que norteia nosso trabalho são baseados na nossa:</p>
    <Tabs tabItemContainerStyle={{background: '#152635'}} contentContainerClassName="home-tab" >
      <Tab icon={<FontIcon className="material-icons">star</FontIcon>} label="VALORES" >
        <p>Trabalhamos de forma <strong>ética</strong>, buscamos a <strong>retidão</strong> na prestação de nossos serviços para nos mantermos na linha da <strong>justiça</strong>.</p>
      </Tab>
      <Tab label="VISÃO" icon={<FontIcon className="material-icons">remove_red_eye</FontIcon>} >
        <p> Ser a melhor empresa de transportes para se trabalhar e de prestação de serviços.</p>
      </Tab>
      <Tab icon={<FontIcon className="material-icons">add_location</FontIcon>} label="MISSÃO" >
        <p> Oferecer serviços de transporte com eficiência, ética, qualidade e responsabilidade.</p>
      </Tab>
    </Tabs>
  </div>
</div>
      </div>
    );
  }
}
