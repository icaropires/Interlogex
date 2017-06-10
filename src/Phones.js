import React from 'react';
import { Grid, Cell, Icon, Tooltip } from 'react-mdl';
import 'mdi/css/materialdesignicons.min.css';

export default class Phones extends React.Component {
	render(){
     	return (
		  <div>
            <Cell col={12}><h1>Telefones</h1></Cell>

            <div className="card_contact">
                <Cell col={12}>
                  <Icon name="phone"/>
                  <label className="ddd">
		      	    (61) 
		      	  </label>
		      	  3554-5467
                </Cell>
                <Cell col={12}>
                  <Icon name="smartphone"/>
                  <label className="ddd">
		      	    (61) 
		      	  </label>
		      	  99552-3590
                </Cell>
                <Cell col={12}>
                  <i className="mdi mdi-whatsapp mdi-24px" />
                  <label className="ddd">
		      	    +55 61 
		      	  </label>
		      	  99552-3590
                </Cell>
            </div>
		  </div>
		);
	}
}
