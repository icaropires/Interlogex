import React from 'react';
import {
    Footer, FooterLinkList, FooterSection,
    FooterDropDownSection, Grid, Cell
    } from 'react-mdl';

export default class FooterInterlogex extends React.Component {
  render(){
    return (
        <Footer size="mega">
          <FooterSection type="middle">
            <FooterDropDownSection>
              <h1 className="mdl-mega-footer--heading mdl-mega-footer__heading" id="title">Telefones <i className="mdi mdi-arrow-down-thick" id="arrow"/></h1>
              <FooterLinkList className="footer_list">
              <Grid>
                <Cell col={12}><label className="label"><i className="mdi mdi-phone-classic" /></label> (61) 3554-5467</Cell>
                <Cell col={12}><label className="label"><i className="mdi mdi-cellphone" /></label> (61) 3554-5467</Cell>
              </Grid>
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection>
              <h1 className="mdl-mega-footer--heading mdl-mega-footer__heading" id="title">E-mails <i className="mdi mdi-arrow-down-thick" id="arrow"/></h1>
              <FooterLinkList className="footer_list">
                <Grid>
                  <Cell col={12}><i className="mdi mdi-email" /> contato@interlogex.com.br</Cell>
                </Grid> 
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection>
              <h1 className="mdl-mega-footer--heading mdl-mega-footer__heading" id="title">Endereço <i className="mdi mdi-arrow-down-thick" id="arrow"/></h1>
              <FooterLinkList className="footer_list">
                <Grid>
                  <i className="mdi mdi-home" />Vicent Pires - DF, Rua 10, Chácara 175
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
