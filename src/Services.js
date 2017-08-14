import React, { Component }from 'react';
import {Card, CardTitle, CardText, CardActions,
        Button, List, ListItem, ListItemContent,
        Grid, Cell
        } from 'react-mdl';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import {  Tooltip } from 'react-mdl';

import service_base from '../public/imagem/our_service_2.jpg';
import controll from '../public/imagem/have_controll.jpg';
import schedule from '../public/imagem/by_time.jpg';
import togo from '../public/imagem/by_distance.jpg';

export default class Services extends Component {
  constructor(props){
    super(props);
    this.showScroll = this.showScroll.bind(this);
    this.state={'scroll': true};
  }

  componentDidMount(){
    document.querySelectorAll(".service-objective-item").forEach(function(e, i){
      setTimeout(function(){
        e.style.opacity = "1";
        setTimeout(function(){
          e.children[0].style.color="#448aff";
        }, 1000);
      }, i*400);
    });
    window.onscroll = this.showScroll;
  }

  showScroll(event){
    if(this.state.scroll === true){
      if(window.scrollY > document.getElementsByClassName("home-subtitle")[0].offsetTop-400){
        this.show(".first");
        if(window.scrollY > document.getElementsByClassName("home-subtitle")[1].offsetTop-400){
          this.show(".second");
          this.setState({'scroll': false});
        }
      }
    }
  }

  show(cls){
    const itemList = document.querySelectorAll(cls);
    itemList.forEach(function(e, i){
      setTimeout(function(){
        e.style.marginLeft="0px";
      },1000*i);
    });
  }

  render() {
		return(
			<div id='services' className="divider">
        <div className="divider">
          <div className="divider-content service-objective">
            <div className="service-objective-item">
              <FontIcon className="material-icons">check_box</FontIcon>
              <Tooltip large label="Atendimentos rápidos e precisos, para te fornecer o melhor serviço">Agilidade</Tooltip>
            </div>
            <div className="service-objective-item">
              <FontIcon className="material-icons">check_box</FontIcon>
              <Tooltip large label="Facilitamos a contratação de nossos serviços">Facilidade na contratação</Tooltip>
            </div>
            <div className="service-objective-item">
              <FontIcon className="material-icons">check_box</FontIcon>
              <Tooltip large label="Reserve nossos entregadores pelo tempo que precisar!">Reserva de entregadores</Tooltip>
            </div>
            <div className="service-objective-item">
              <FontIcon className="material-icons">check_box</FontIcon>
              <Tooltip large label="Use nosso sistema de rastreamento de carga na área do cliente e fique por dentro de onde está sua entrega">Rastreamento da carga</Tooltip>
            </div>
            <div className="service-objective-item">
              <FontIcon className="material-icons">check_box</FontIcon>
              <Tooltip large label="Não limitamos os serviços prestados por nossos colaboradores apenas a coleta e entrega de pacotes. Pegam fila, aguardam atendimento, tudo que precisar!">Entregadores disponível para tudo</Tooltip>
            </div>
            <div className="service-objective-item">
              <FontIcon className="material-icons">check_box</FontIcon>
              <Tooltip large label="Defina a periocidade ou agendamento das entregas a serem realizadas">Agendamento de entrega</Tooltip>
            </div>
            <div className="service-objective-item">
              <FontIcon className="material-icons">check_box</FontIcon>
              <Tooltip large label="Fazemos agendamentos e entregas em todo o horário comercial">Flexibilidade nos horários</Tooltip>
            </div>
            <div className="service-objective-item">
              <FontIcon className="material-icons">check_box</FontIcon>
              <Tooltip large label="Temos uma ótima equipe para relacionamento com você, cliente!">Equipe de atendimento sempre disponível</Tooltip>
            </div>
            <div className="service-objective-item">
              <FontIcon className="material-icons">check_box</FontIcon>
              <Tooltip large label="Atendemos a entregas de pequenos e médios pacotes com nossa frota de motos e carros">Motos e carros a disposição</Tooltip>
            </div>
            <div className="service-objective-item">
              <FontIcon className="material-icons">check_box</FontIcon>
              <Tooltip large label="Nossos colaboradores são dedicados e empenhados a realizarem o serviço da maneira mais rápida e confiável!">Entregas rápidas</Tooltip>
            </div>
            <div className="service-objective-item">
              <FontIcon className="material-icons">check_box</FontIcon>
              <Tooltip large label="Contamos com profissionais especialmente selecionados para atender às suas demandas de serviço!">Equipe profissional</Tooltip>
            </div>
            <div className="service-objective-item">
              <FontIcon className="material-icons">check_box</FontIcon>
              <Tooltip large label="Gostamos quando nossos clientes deixam seus comentários em nossas redes sociais">Abertos para feedbacks</Tooltip>
            </div>
          </div>
        </div>
        <div className="home-title" style={{paddingTop: "40px"}}>
          <span>Tipos de serviços</span>
        </div>
        <div className="divider-content">
          <div className="service-precontent">
          Nós fornecemos vários tipos de serviços além de uma simples entrega de pacotes, conheça abaixo um pouco mais.
          </div>
          <Divider />
          <div className="divider">
            <div id="exclusive" className="home-subtitle">
              <span>Contratos</span>
            </div>
            <div className="service-content first">
              <div className="home-subsubtitle"><span>Entregadores reservados</span></div>
              <img src={service_base} />
              <p>
                Possibilitamos que você reserve <strong>1 ou mais</strong> entregadores pelo tempo que precissar.
              </p>
              <p>
                Nossos entregadores são profissionais e estarão a sua disposição para resolver questões simples que demandem <strong>tempo</strong> para <strong>você!</strong>
              </p>
              <p>
                <strong>Recomendamos</strong> para quem não sabe quando vai precisar de serviços de entrega. Mas tem certeza que precisará utilizar várias vezes por um determinado período.
              </p>
            </div>
            <div className="service-content first">
              <div id="schedule" className="home-subsubtitle">
                <span>Agende o que precisar</span>
              </div>
              <img src={schedule} />
              <p>
                Economize seu tempo o máximo que puder, com o <strong>nosso agendamento,</strong> no qual você poderá evitar o desperdício de tempo de precisar gerar novos contratos a cada demanda.
              </p>
              <p>
                Disponibilizamos nossos entregadores para atender as suas demandas nos períodos que contratar, podendo ser períodos distintos para atender <strong>suas necessidades.</strong>
              </p>
              <p>
                Disponibilizamos agendamentos de acordo com sua agenda. Seja toda segunda-feira das 8h-12h, todos os dias da semana das 16h-18h, a primeira sexta-feira de todos os meses por 5 meses.<br />
              </p>
              <p style={{textAlign: "center"}}>
              <strong>Qualquer que seja sua necessidade de agendamento, nós atenderemos!</strong>
              </p>
              <p>
              <strong>Recomendamos</strong> para quem precisa de serviços de entrega periódicamente e não querem precisar contratar um novo serviço periódicamente.
              </p>
            </div>
          </div>
          <div className="divider">
            <div id="by-hour" className="home-subtitle">
              <span>Demanda</span>
            </div>
            <div className="service-content second">
              <div className="home-subsubtitle">
                <span>Tempo</span>
              </div>
              <img src={controll} />
              <p>
              Contrate os serviços de entrega pela quantidade de horas que precisar no dia. É uma forma simples de contrato, no qual não é preciso especificar a distância, apenas onde o entregador deve iniciar e os locais das entregas, assim, será cobrado pelo tempo que funcionário estiver prestando o serviço.
              </p>
              <p>
                Neste tipo de contrato, o entregador está disponível pelo tempo quer for necessário para cumprir a demanda. E como nossos funcionários são profissionais, eles podem resolver assuntos no cartório, pagamentos em caixas bancários, o que você precisar!
              </p>
              <p>
              <strong>Recomendamos</strong> para quem deseja realizar mais de uma entrega, e não sabe quais lugares e quantas vezes ela irá necessitar do serviço.
              </p>
            </div>
            <div className="service-content second">
              <div id="by-distance" className="home-subsubtitle">
                <span>Distância</span>
              </div>
              <img src={togo} />
              <p>Este tipo de contrato é o convêncional, no qual, são combinados locais de coleta e entrega das mercadorias e o valor é dado pela distância entre estes locais!                
              </p>
              <p>
              Estará disponível para realizar uma <strong>rota de entregas</strong>, na qual o nosso funcionário pode passar em vários locais para entregar as mercadorias.
              </p>
              <p>
              <strong>Recomendamos</strong> para pessoas que desejam realizar entregas simples e únicas que não precisam de serviços adicionais, apenas coleta e entrega nos pontos combinados.
              </p>
            </div>
          </div>
        </div>
      </div>
		);
	}
}
