import React from 'react';

import EmailForm from './EmailForm';
import Map from './Map';
import ContactInfo from './ContactInfo';
import Comment from './Comment';

export default class Contact extends React.Component {
  render(){
    return (
      <div>
        <div className="divider">
          <div className="contact-page-init">
            <img src="https://static.pexels.com/photos/326569/pexels-photo-326569.jpeg" />
          </div>
        </div>
        <div id='contacts' className="divider">
          <div id="social-media" className="home-title">
            <span>Contatos</span>
          </div>
          <div className="divider-content">
            <ContactInfo />
          </div>
        </div>
        <div className="divider" id="contact-facebook">
          <div className="home-title">
            <span>Deixe seu comentário</span>
          </div>
          <div className="divider-content">
          <Comment />
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
          <div className="maps divider-content">
            <Map />
          </div>
        </div>
      </div>
    );
  }
}
