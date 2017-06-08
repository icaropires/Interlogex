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
        <Footer size="mega">
          <FooterSection type="middle">
            <FooterDropDownSection title="">
              <h1 className="mdl-mega-footer--heading mdl-mega-footer__heading" id="title">Telefones <Icon name="expand_more" id="arrow"/></h1>
              <FooterLinkList className="footer_list">
              <Grid>
                <Cell col={12}>
		  <label className="label">
		    <Icon name="phone" />
		  </label> (61) 3554-5467</Cell>
                <Cell col={12}>
		  <label className="label">
		    <Icon name="smartphone" />
		  </label> (61) 99552-3590 <i className="mdi mdi-whatsapp mdi-24px" />
		</Cell>
              </Grid>
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="">
              <h1 className="mdl-mega-footer--heading mdl-mega-footer__heading" id="title">E-mails <Icon name="expand_more" id="arrow"/></h1>
              <FooterLinkList className="footer_list">
                <Grid>
                  <Cell col={12}><Icon name="email" style={{marginRight: "10px"}} /><Tooltip label="Envie-nos um e-mail" large><Link style={{textDecoration: "none", color: "inherit"}} to="mailto:interlogex@interlogex.com.br" target="_blank"> interlogex@interlogex.com.br</Link></Tooltip></Cell>
                </Grid> 
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="">
              <h1 className="mdl-mega-footer--heading mdl-mega-footer__heading" id="title">Endereço <Icon name="expand_more" id="arrow"/></h1>
              <FooterLinkList className="footer_list">
                <Grid>
                  <Icon name="home" />SHVP Rua 10 Chácara 177 Casa 08 Condomínio Alphaville - Vicente Pires - DF
                </Grid>
              </FooterLinkList>
            </FooterDropDownSection>
          </FooterSection>
          <FooterSection type="bottom">
            <center className="company_name">InterlogEx © Internacional Logistica Express - Todos os direitos reservados</center>
          </FooterSection>
        </Footer>
    );
  }
}
