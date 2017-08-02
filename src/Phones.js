import React from 'react';
import { Grid, Icon, Tooltip } from 'react-mdl';
import 'mdi/css/materialdesignicons.min.css';

export default class Phones extends React.Component {
  render(){
   return (
    <div>
      <div className="home-subsubtitle"><span>Telefones</span></div>

        <div className="card_contact">
          <div >
            <Icon name="phone"/>
            <label className="ddd">
              (61)
            </label>
            3554-5467
          </div>
          <div >
            <Icon name="smartphone"/>
            <label className="ddd">
              (61)
            </label>
            99552-3590
          </div>
          <div >
            <i className="mdi mdi-whatsapp mdi-24px" />
            <label className="ddd">
              +55 61
            </label>
            99552-3590
          </div>
        </div>
      </div>
    );
  }
}
