import React from 'react';
import 'mdi/css/materialdesignicons.min.css';
import { Grid, Cell, Icon, Tooltip } from 'react-mdl';
import { Link } from 'react-router-dom';

export default class SocialMedias extends React.Component {
     render(){
         return(
           <div>
             <Cell col={12}><h1>Mídias sociais</h1></Cell>

               <Cell col={12}>
                 <Cell col={12}>
                   <i className="mdi mdi-facebook mdi-24px" style={{marginRight: '10px'}} />
                   <Tooltip label="Visite nossa página do Facebook" large>
                     <Link style={{textDecoration: "none", color: "inherit"}} target="_blank" to="http://facebook.com/interlogex">
                       @interlogex
                     </Link>
                   </Tooltip>
                 </Cell>
                 <Cell col={12}>
                   <i className="mdi mdi-instagram mdi-24px" style={{marginRight: '10px'}} />
                   <Tooltip label="Perfil no Instagram" large>
                     <Link style={{textDecoration: "none", color: "inherit"}} target="_blank" to="http://instagram.com/interlogex">
                       @interlogex
                     </Link>
                   </Tooltip>
                 </Cell>
                 <Cell col={12}>
                   <Icon name="email" style={{marginRight: '10px'}} />
                   <Tooltip label="Envie-nos um email" large>
                     <Link style={{textDecoration: "none", color: "inherit"}} target='_top' to="mailto:interlogex@interlogex.com.br?Subject=Contato">
                       interlogex@interlogex.com.br
                     </Link>
                   </Tooltip>
                 </Cell>
             </Cell>
           </div>
        );
    }
}