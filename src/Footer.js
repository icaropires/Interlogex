import React from 'react';
import {
    Footer, FooterLinkList, FooterSection,
    FooterDropDownSection, Grid, Cell, Icon
    } from 'react-mdl';

export default class FooterInterlogex extends React.Component {
  render(){
    return (
        <Footer size="mega">
          <FooterSection type="middle">
            <FooterDropDownSection>
              <h1 className="mdl-mega-footer--heading mdl-mega-footer__heading" id="title">Telefones <Icon name="expand_more" id="arrow"/></h1>
              <FooterLinkList className="footer_list">
              <Grid>
                <Cell col={12}><label className="label"><Icon name="phone" /></label> (61) 3554-5467</Cell>
                <Cell col={12}><label className="label"><Icon name="smartphone" /></label> (61) 3554-5467</Cell>
              </Grid>
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection>
              <h1 className="mdl-mega-footer--heading mdl-mega-footer__heading" id="title">E-mails <Icon name="expand_more" id="arrow"/></h1>
              <FooterLinkList className="footer_list">
                <Grid>
                  <Cell col={12}><Icon name="email" /> contato@interlogex.com.br</Cell>
                </Grid> 
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection>
              <h1 className="mdl-mega-footer--heading mdl-mega-footer__heading" id="title">Endereço <Icon name="expand_more" id="arrow"/></h1>
              <FooterLinkList className="footer_list">
                <Grid>
                  <Icon name="home" />Vicent Pires - DF, Rua 10, Chácara 175
                </Grid>
              </FooterLinkList>
            </FooterDropDownSection>
          </FooterSection>
          <FooterSection type="bottom">
            <center className="company_name">InterLogEx © Internacional Logistica Express - Todos os direitos reservados</center>
          </FooterSection>
        </Footer>
    );
  }
}
