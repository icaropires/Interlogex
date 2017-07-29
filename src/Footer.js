import React from 'react';
import {Link} from 'react-router-dom';
import {
    Footer, FooterLinkList, FooterSection,
    FooterDropDownSection, Grid, Cell, Icon,
    Tooltip
    } from 'react-mdl';

export default class FooterInterlogex extends React.Component {
  render(){
    return (
        <footer style={{background: 'black'}}>
          <div>
            <div>
              <h1 className="" id="title">Telefones <Icon name="expand_more" id="arrow"/></h1>
              <div className="footer_list">
                <div>
                  <div>
                    <label className="label">
                      <Icon name="phone" />
                    </label> (61) 3554-5467
                  </div>
                  <div>
                    <label className="label">
                    <Icon name="smartphone" />
                    </label> (61) 99552-3590 <i className="mdi mdi-whatsapp mdi-24px" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="" id="title">E-mails <Icon name="expand_more" id="arrow"/></h1>
              <div className="footer_list">
                <div>
                  <div>
                    <Icon name="email" style={{marginRight: "10px"}} />
                    <Tooltip label="Envie-nos um e-mail" large>
                      <Link style={{textDecoration: "none", color: "inherit"}} to="/contato#contact">
                        interlogex@interlogex.com.br
                      </Link>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="" id="title">
                Endereço
                <Icon name="expand_more" id="arrow"/>
              </h1>
              <div className="footer_list">
                <div>
                  <Icon name="home" />
                  <Tooltip label="Nos veja no mapa!" large>
                    <Link style={{textDecoration: "none", color: "inherit"}} to="/contato#map">
                      SHVP Rua 10 Chácara 177 Casa 08 Condomínio Alphaville - Vicente Pires - DF
                    </Link>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
          <div>
            <center className="company_name">InterlogEx © Internacional Logistica Express - Todos os direitos reservados</center>
          </div>
        </footer>
    );
  }
}
