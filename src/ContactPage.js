import React from 'react';

import EmailForm from './EmailForm';
import Map from './Map';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component {
  render(){
    return (
      <div>
        <div className="divider">
          <div className="home-subtitle">
            <span id="social-media">Contatos</span>
          </div>
          <div className="divider-content">
            <ContactInfo />
          </div>
        </div>
        <div  className="divider">
          <div className="home-title">
            <span>CONTATOS</span>
          </div>
        </div>
        <div className="divider">
          <div className="home-subtitle">
            <span id="contact">Envie-nos um email</span>
          </div>
          <div className="divider-content">
            <EmailForm />
          </div>
        </div>
        <div className="divider">
          <div className="home-title">
            <span id="map">Localização no mapa</span>
          </div>
          <div className="maps">
            <Map />
          </div>
        </div>
      </div>
    );
  }
}
