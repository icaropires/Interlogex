import React from 'react';
import {Link} from 'react-router-dom';
import {
  Footer, FooterLinkList, FooterSection,
  FooterDropDownSection, Grid, Cell, Icon,
  Tooltip
} from 'react-mdl';

export default class FooterInterlogex extends React.Component {
   render(){
       return (
         <Footer style={{background: 'black', height:'250px'}}>
           <FooterSection type="middle" style={{height: '80%'}}>
             <Grid style={{height: "100%"}}>

               <Cell col={3} style={{height: "100%"}}>
                 <FooterDropDownSection title="Áreas do site" style={{width: '100%'}}>
                   <FooterLinkList className="footer_list">
                     <Link to="#"> Destaques </Link>
                     <Link to="#"> Serviços </Link>
                     <Link to="#"> Relacionamento c/ Clientes </Link>
                     <Link to="#"> Contato </Link>
                     <Link to="#"> Sobre nós </Link>
                     <Link to="#"> Área do cliente </Link>
                   </FooterLinkList>
                 </FooterDropDownSection>
               </Cell>

               <Cell col={3} style={{height: "100%"}}>
                 <FooterDropDownSection title="Telefones" style={{width: '100%'}}>
                   <FooterLinkList className="footer_list">
                     <div>
                       <Icon name="phone" style={{marginRight: "5px"}} />
                       (61) 3554-5467
                     </div>
                     <div>
                       <Icon className="mdi mdi-whatsapp mdi-24px" style={{marginRight: "5px"}} />
                       (61) 99552-3590
                     </div>
                   </FooterLinkList>
                 </FooterDropDownSection>
               </Cell>

               <Cell col={3} style={{height: "100%"}}>
                 <FooterDropDownSection title="E-mails" style={{width: '100%'}}>
                   <FooterLinkList className="footer_list">
                     <div>
                       <Icon name="email" style={{marginRight: "5px"}} />
                       <Tooltip label="Envie-nos um e-mail" large>
                         <Link to="/contato#contact">
                           interlogex@interlogex.com.br
                         </Link>
                       </Tooltip>
                     </div>
                   </FooterLinkList>
                 </FooterDropDownSection>
               </Cell>

               <Cell col={3} style={{height: "100%"}}>
                 <FooterDropDownSection title="Redes Sociais" style={{width: '100%'}}>
                   <FooterLinkList className="footer_list">
                     <div>
                       <Tooltip label="Ir para página do Facebook" large>
                         <Link target="_blank" to="http://facebook.com/interlogex">
                           <Icon className="mdi mdi-facebook mdi-24px" style={{margin: '2px'}}/>
                         </Link>
                       </Tooltip>

                       <Tooltip label="Ir para perfil do Linkedin" large>
                         <Link target="_blank" to="https://br.linkedin.com/in/internacional-interlogex">
                           <Icon className="mdi mdi-linkedin mdi-24px" style={{margin: '2px'}}/>
                         </Link>
                       </Tooltip>

                       <Tooltip label="Ir para perfil no Instagram" large>
                         <Link target="_blank" to="http://instagram.com/interlogex">
                           <Icon className="mdi mdi-instagram mdi-24px" style={{margin: '2px'}}/>
                         </Link>
                       </Tooltip>
                     </div>
                   </FooterLinkList>
                 </FooterDropDownSection>
               </Cell>
             </Grid>
           </FooterSection>

           <FooterSection type="bottom">
             <center className="company_name">
               <div>
                 {/* <Icon name="home" /> */}
                 <Tooltip label="Nos veja no mapa!" large>
                   <Link style={{textDecoration: "none", color: "inherit"}} to="/contato#map">
                     SHVP Rua 10 Chácara 177 Casa 08 Condomínio Alphaville - Vicente Pires - DF
                   </Link>
                 </Tooltip>
               </div>
               InterlogEx © Internacional Logistica Express - Todos os direitos reservados
             </center>
           </FooterSection>

         </Footer>
       );
    }
}
