import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Cell, Icon, Tooltip } from 'react-mdl';
import 'mdi/css/materialdesignicons.min.css';


export default class Adress extends React.Component {
	render(){
     	return (
		  <div>
            <Cell col={12}><h1>Endereço</h1></Cell>

            <Cell col={12}>
              <Icon name="home" style={{marginRight: '10px'}}/>
			    SHVP Rua 10 Chácara 177 Casa 08 Condomínio Alphaville - Vicente Pires - DF
            </Cell>
		  </div>
		);
	}
}
