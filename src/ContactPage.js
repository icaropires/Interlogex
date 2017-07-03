import React from 'react';
import { Grid, Cell } from 'react-mdl';

import EmailForm from './EmailForm';
import Map from './Map';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component {
  render(){
    return (
      <div className="contato">
        <Grid  className="page_head contact_head">
          <Cell col={12}>
            <h1>CONTATOS</h1>
          </Cell>
        </Grid>
        <Grid >
          <Cell col={6}>
            <h1 id="contact">Envie-nos um email</h1>
            <EmailForm />
          </Cell>
          <Cell col={6} className="cell_custom">
            <ContactInfo />
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
            <h1 id="map">Localização no mapa</h1>
          </Cell>
          <Cell col={12} className="maps">
            <Map />
          </Cell>
        </Grid>
      </div>
    );
  }
}
