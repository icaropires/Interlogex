import React from 'react';
import { Link } from 'react-router-dom';
import { Grid,Icon, Tooltip } from 'react-mdl';
import 'mdi/css/materialdesignicons.min.css';


export default class Adress extends React.Component {
  render(){
    return (
      <div className="contact-container-item">
        <div className="home-subsubtitle"><span>Endereço</span></div>

        <div className="card-contact">
        <Icon name="home" style={{marginRight: '10px', top: '3px', position: 'relative'}}/>
        SHVP Rua 10 Chácara 177 Casa 08 Condomínio Alphaville - Vicente Pires - DF
        </div>
      </div>
    );
  }
}
